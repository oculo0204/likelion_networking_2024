import React from 'react'
import { Link } from 'react-router-dom'

const TeamJoin = () => {
    return (
        <div className='TeamJoin_wrap container'>
            <h1>
                @@님의<br />
                그룹에 초대 되었어요!    
            </h1>
            <p>로그인하고 그룹에 참여하세요!</p>
            <div className="btn_box">
                <Link to='/login' className="login">로그인</Link>
                <Link to='/join' className="join">회원가입</Link>
            </div>
        </div>
    )
}

export default TeamJoin