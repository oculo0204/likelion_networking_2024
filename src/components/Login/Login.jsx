import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import IconBack from '../../assets/img/back_btn/Icon_back.svg';
import axios from 'axios';

const Login = () => {

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async() => {
        try {
            const response = await axios.post('http://beancp.com:8082/login/login', {
                id,
                password
            }, { withCredentials: true });
            console.log("로그인 성공");
            navigate('/mainLogin');
        } catch (err) {
            console.log("로그인 실패", err);
        }
    }

    return (
        <main className='container login-main'>
            <div className='back-btn-head'>    
                <Link to='/mainlogout'>
                    <img src={IconBack} alt="Back Icon" className='back-btn-img'/>
                </Link>
                <h1>로그인</h1>
            </div>
            <div className='login-input'>
                <form className='login-form'>
                    <div className='input-group'>
                        <label htmlFor='userId'>아이디</label>
                        <input type='text' id='userId' name='userId' placeholder='아이디를 입력하세요' value={id} onChange={(e)=>setId(e.target.value)}/>
                    </div>
                    <div className='input-group'>
                        <label htmlFor='password'>비밀번호</label>
                        <input type='password' id='password' name='password' placeholder='비밀번호를 입력하세요' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                </form>
            </div>
            <button type='button' className='login-btn' onClick={handleLogin}>로그인</button>
        </main>
    )
}

export default Login

