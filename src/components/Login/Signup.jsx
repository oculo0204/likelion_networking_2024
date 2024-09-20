import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import IconBack from '../../assets/img/back_btn/Icon_back.svg';
import Down from '../../assets/img/Login/down.svg';
import { Link } from 'react-router-dom'; // Link 컴포넌트 추가

function Signup() {
    const[loginId, setLoginId] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [bank, setBank] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [accountName, setAccountName] = useState('');
    const [isAccountDetailsVisible, setAccountDetailsVisible] = useState(true);
    const navigate = useNavigate();

    // 은행 리스트 토글
    const handleToggleAccountDetails = () => {
        setAccountDetailsVisible(!isAccountDetailsVisible);
    };
    const handleSelectBank = (selectedBank) => {
        setBank(selectedBank);
        setAccountDetailsVisible(true); // 은행 선택 후 계좌 상세 보이게 설정
    };

    const handleSignup = async () => {
        try {
            const response = await axios.post('http://beancp.com:8082/login/signUp', {
                loginId,
                password,
                name,
                bank,
                accountNumber,
                accountName
            });

            console.log('회원가입 성공:', response.data); // 응답 데이터 로그
            navigate('/login/signupSuccess');
        } catch (err) {
            console.error('회원가입 에러:', err.response?.data || err.message); // 응답 데이터 로그
        }
    };

    return (
        <div>
            <main className='container signup-main'>
                <div className='back-btn-head'>    
                <Link to='/mainlogout'>
                    <img src={IconBack} alt="Back Icon" className='back-btn-img'/>
                </Link>
                    <h1>회원가입</h1>
                </div>
                <div className='signup-input'>
                    <form className='signup-form'>
                        <div className='input-group'>
                            <label htmlFor='username'>이름</label>
                            <input type='text' id='username' name='username' placeholder='이름을 입력하세요' value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className='input-group'>
                            <label htmlFor='userId'>아이디</label>
                            <input type='text' id='userId' name='userId' placeholder='아이디를 입력하세요' value={loginId} onChange={(e) => setLoginId(e.target.value)}/>
                        </div>
                        <div className='input-group'>
                            <label htmlFor='password'>비밀번호</label>
                            <input type='password' id='password' name='password' placeholder='비밀번호를 입력하세요' value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className='input-group account-wrap'>
                            <label htmlFor='account'>계좌번호</label>
                            <p>여행 비용 정산시 친구들에게 알려줄 계좌번호를 입력하세요</p>
                            <button type='button' className='toggle-button' onClick={handleToggleAccountDetails}>
                                {bank ? bank : '은행정보'} {isAccountDetailsVisible ? <img src={Down} className="downArrow" alt="Down Arrow" /> : <img src={Down} className="downArrow flipped" alt="Up Arrow" />}
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
                                <input type='text' id='account' name='account' placeholder='계좌번호를 입력하세요 (숫자만 입력하세요)' value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)}/>
                                <input type='text' id='account-name' name='account-name' placeholder='예금주명을 입력하세요 (선택)' value={accountName} onChange={(e) => setAccountName(e.target.value)}/>
                                <p className='caution'>*정상적으로 입금할 수 있도록, 입력한 정보가 정확한지 다시 한번 확인해주세요!</p>
                            </div>
                        </div>
                    </form>
                </div>
                <button type='button' className='signup-btn' onClick={handleSignup}>회원가입</button>
                <Link to="/login" className='Tologin'>기존 계정으로 로그인</Link> 
            </main>
        </div>
    );
}

export default Signup;
