import React, { useState } from 'react';
import IconBack from '../../assets/img/back_btn/Icon_back.svg';
import Down from '../../assets/img/Login/down.svg';

function Signup() {
    const [isAccountDetailsVisible, setAccountDetailsVisible] = useState(true);

    const handleToggleAccountDetails = () => {
        setAccountDetailsVisible(!isAccountDetailsVisible);
    };

    const handleLogin = () => {
        document.querySelector('.signup-form').requestSubmit(); // 폼 제출
    };

    return (
        <div>
            <main className='container signup-main'>
                <div className='back-btn-head'>    
                    <a href='javascript:history.back()'>
                        <img src={IconBack} alt="Back Icon" className='back-btn-img'/>
                    </a>
                    <h1>회원가입</h1>
                </div>
                <div className='signup-input'>
                    <form className='signup-form'>
                        <div className='input-group'>
                            <label htmlFor='username'>이름</label>
                            <input type='text' id='username' name='username' placeholder='이름을 입력하세요' />
                        </div>
                        <div className='input-group'>
                            <label htmlFor='userId'>아이디</label>
                            <input type='text' id='userId' name='userId' placeholder='아이디를 입력하세요' />
                        </div>
                        <div className='input-group'>
                            <label htmlFor='password'>비밀번호</label>
                            <input type='password' id='password' name='password' placeholder='비밀번호를 입력하세요' />
                        </div>
                        <div className='input-group account-wrap'>
                            <label htmlFor='account'>계좌번호</label>
                            <p>여행 비용 정산시 친구들에게 알려줄 계좌번호를 입력하세요</p>
                            <button type='button' className='toggle-button' onClick={handleToggleAccountDetails}>
                                은행 정보 {isAccountDetailsVisible ? <img src={Down} className="downArrow" alt="Down Arrow" /> : <img src={Down} className="downArrow flipped" alt="Up Arrow" />}
                            </button>
                            {!isAccountDetailsVisible && (
                                <div className='bank-list'>
                                    <button type='button' className='bank-button'>NH농협은행</button>
                                    <button type='button' className='bank-button'>IBK기업은행</button>
                                    <button type='button' className='bank-button'>우리은행</button>
                                    <button type='button' className='bank-button'>신한은행</button>
                                    <button type='button' className='bank-button'>KEB하나은행</button>
                                    <button type='button' className='bank-button'>KB국민은행</button>
                                    <button type='button' className='bank-button'>카카오뱅크</button>
                                    <button type='button' className='bank-button'>SC제일은행</button>
                                </div>
                            )}
                            <div className='account-details'>
                                    <input type='text' id='account' name='account' placeholder='계좌번호를 입력하세요 (숫자만 입력하세요)' />
                                    <input type='text' id='account-name' name='account-name' placeholder='예금주명을 입력하세요 (선택)' />
                                    <p className='caution'>*정상적으로 입금할 수 있도록, 입력한 정보가 정확한지 다시 한번 확인해주세요!</p>
                            </div>
                        </div>
                    </form>
                </div>
                <button type='button' className='signup-btn' onClick={handleLogin}>회원가입</button>
                <a href="#" className='Tologin'>기존 계정으로 로그인</a>
            </main>
        </div>
    );
}

export default Signup