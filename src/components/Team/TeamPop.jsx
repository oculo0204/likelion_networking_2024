import React from 'react'
import Close from '../../assets/img/Team/close.svg'
import { Link } from 'react-router-dom'

const TeamPop = ({ setPopup }) => {
    return (
        <div className='popup_wrap'>
            <button className="close" onClick={() => { setPopup(false) }}><img src={Close} alt="close button" /></button>
            <h2>그룹이 생성되었어요</h2>
            <p>url을 복사하고 친구들에게 공유하여 초대하세요!</p>
            <div className="btn_box">
                <button className="done">초대 URL 복사하기</button>
                <button className="delete"><Link to='/travel'>현재 진행 중인 여행 보러가기</Link></button>
            </div>
        </div>
    )
}

export default TeamPop