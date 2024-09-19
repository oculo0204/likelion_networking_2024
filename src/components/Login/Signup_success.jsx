import React from 'react';
import { Link } from 'react-router-dom'; 

const Signup_success = () => {
  return (
    <div>
        <main className='container signSuccess-main'>
           <h2>회원가입 완료</h2>
           <h1>@@@님, 환영해요</h1>
           <Link to='/login' className='Tosign-btn'>로그인 하러가기</Link>
        </main>
    </div>
  )
}

export default Signup_success;
