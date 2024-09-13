import React from 'react'
import IconBack from '../../assets/img/back_btn/Icon_back.svg';

const Login = () => {
    const handleLogin = () => {
        document.querySelector('.login-form').requestSubmit(); // 폼 제출
    }

    return (
        <main className='container login-main'>
            <div className='back-btn-head'>    
                <a href='javascript:history.back()'>
                    <img src={IconBack} alt="Back Icon" className='back-btn-img'/>
                </a>
                <h1>로그인</h1>
            </div>
            <div className='login-input'>
                <form className='login-form'>
                    <div className='input-group'>
                        <label htmlFor='userId'>아이디</label>
                        <input type='text' id='userId' name='userId' placeholder='아이디를 입력하세요' />
                    </div>
                    <div className='input-group'>
                        <label htmlFor='password'>비밀번호</label>
                        <input type='password' id='password' name='password' placeholder='비밀번호를 입력하세요' />
                    </div>
                </form>
            </div>
            <button type='button' className='login-btn' onClick={handleLogin}>로그인</button>
        </main>
    )
}

export default Login
