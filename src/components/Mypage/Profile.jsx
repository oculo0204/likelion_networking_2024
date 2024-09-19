import React, { useState } from 'react';
import IconBack from '../../assets/img/back_btn/Icon_back.svg';
import Down from '../../assets/img/Login/down.svg';
import Close from '../../assets/img/Mypage/close.svg';
import DefaultProfilePic from '../../assets/img/Mypage/profile_default.svg'; // 임시 프로필 이미지
import axios from 'axios';

const Profile = () => {
    const [isAccountDetailsVisible, setAccountDetailsVisible] = useState(true);
    const [formData, setFormData] = useState({
        username: '',
        userId: '',
        password: '',
        accountNumber: '',
        accountName: '',
        bank: ''
    });

    const handleToggleAccountDetails = () => {
        setAccountDetailsVisible(!isAccountDetailsVisible);
    };

    const handleSelectBank = (selectedBank) => {
        setFormData(prevData => ({
            ...prevData,
            bank: selectedBank
        }));
        setAccountDetailsVisible(true); // 은행 선택 후 계좌 상세 보이게 설정
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSave = async () => {
        try {
            await axios.put('http://beancp.com:8082/user/update', {
                loginId: formData.userId,
                name: formData.username,
                accountName: formData.accountName,
                accountNumber: parseInt(formData.accountNumber, 10),
                bank: formData.bank
            }, { withCredentials: true });

            document.getElementById("actionSheet").classList.add("active");
            setTimeout(() => {
                document.getElementById("actionSheet").classList.remove("active");
            }, 2000);
        } catch (err) {
            console.error("회원 정보 수정 실패", err);
        }
    };

    const handleLogin = () => {
        document.getElementById("actionSheet").classList.add("active");
    };

    const close = () => {
        document.getElementById("actionSheet").classList.remove("active");
    };

    // 나중에 백엔드에서 프로필 이미지 URL을 가져와야 할 부분
    const profileImageUrl = DefaultProfilePic; // 임시로 로컬 이미지를 사용

    return (
        <div className='container profile-main'>
            <div className='back-btn-head'>    
                <a href='javascript:history.back()'>
                    <img src={IconBack} alt="Back Icon" className='back-btn-img'/>
                </a>
                <h1>회원가입</h1>
            </div>
            <div className='profile-input'>
                <form className='profile-form'>
                    <div className='input-group'>
                        <label htmlFor='username'>이름</label>
                        <input
                            type='text'
                            id='username'
                            name='username'
                            placeholder='이름을 입력하세요'
                            value={formData.username}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='input-image'>
                        <h1>프로필 사진 변경</h1>
                        <div className='edit-image'>
                            <img src={profileImageUrl} alt="Profile" className='profile-image' />
                            <input type="file" id="imageUpload" name="image" accept="image/*" className='hidden'/>
                            <label htmlFor="imageUpload" className='file-button'><p>파일 선택</p></label>
                        </div>
                    </div>
                    <div className='input-group'>
                        <label htmlFor='userId'>아이디</label>
                        <input
                            type='text'
                            id='userId'
                            name='userId'
                            placeholder='아이디를 입력하세요'
                            value={formData.userId}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='input-group'>
                        <label htmlFor='password'>비밀번호</label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            placeholder='비밀번호를 입력하세요'
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='input-group account-wrap'>
                        <label htmlFor='account'>계좌번호</label>
                        <p>여행 비용 정산시 친구들에게 알려줄 계좌번호를 입력하세요</p>
                        <button type='button' className='toggle-button' onClick={handleToggleAccountDetails}>
                            {formData.bank || '은행 정보'} {isAccountDetailsVisible ? <img src={Down} className="downArrow" alt="Down Arrow" /> : <img src={Down} className="downArrow flipped" alt="Up Arrow" />}
                        </button>
                        {!isAccountDetailsVisible && (
                            <div className='bank-list'>
                                <button type='button' className='bank-button' onClick={() => handleSelectBank('NH농협은행')}>NH농협은행</button>
                                <button type='button' className='bank-button' onClick={() => handleSelectBank('IBK기업은행')}>IBK기업은행</button>
                                <button type='button' className='bank-button' onClick={() => handleSelectBank('우리은행')}>우리은행</button>
                                <button type='button' className='bank-button' onClick={() => handleSelectBank('신한은행')}>신한은행</button>
                                <button type='button' className='bank-button' onClick={() => handleSelectBank('KEB하나은행')}>KEB하나은행</button>
                                <button type='button' className='bank-button' onClick={() => handleSelectBank('KB국민은행')}>KB국민은행</button>
                                <button type='button' className='bank-button' onClick={() => handleSelectBank('카카오뱅크')}>카카오뱅크</button>
                                <button type='button' className='bank-button' onClick={() => handleSelectBank('SC제일은행')}>SC제일은행</button>
                            </div>
                        )}
                        <div className='account-details'>
                            <input
                                type='text'
                                id='account'
                                name='accountNumber'
                                placeholder='계좌번호를 입력하세요 (숫자만 입력하세요)'
                                value={formData.accountNumber}
                                onChange={handleInputChange}
                            />
                            <input
                                type='text'
                                id='account-name'
                                name='accountName'
                                placeholder='예금주명을 입력하세요 (선택)'
                                value={formData.accountName}
                                onChange={handleInputChange}
                            />
                            <p className='caution'>*정상적으로 입금할 수 있도록, 입력한 정보가 정확한지 다시 한번 확인해주세요!</p>
                        </div>
                    </div>
                </form>
            </div>
            <div className='profile-bottom'>
                <button type='button' className='save-btn' onClick={handleSave}>저장</button>
                <button type='button' className='cancel-btn'>취소</button>
            </div>
            <div className="action-sheet" id="actionSheet" onClick={close}>
                <div className="action-options">
                    <button className="close" onClick={close}><img src={Close} alt="닫기버튼" /></button>
                    <div className='option'>
                        <h1>저장되었습니다</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
