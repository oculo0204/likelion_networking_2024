import React from 'react'
import Back from '../../assets/img/Team/back.svg'
import Plus from '../../assets/img/Team/plus.svg'
import { Link, useNavigate } from 'react-router-dom'

const Travel = () => {
    const navigation = useNavigate();

    const GoDetail = () =>{
        navigation('/travelnow')
    }

    return (
        <div className='Travel_wrap container'>
            <div>
                <div className="header">
                    <img src={Back} alt="back button" />
                    <h2>현재 진행 중인 여행</h2>
                </div>
                <div className="main">
                    <Link to='/team'>
                        <img src={Plus} alt="" />
                        <p>새로운 여행 떠나기</p>
                    </Link>
                    <div className="list_wrap">
                        <div className="list" onClick={() => {GoDetail()}}>
                            <div>
                                <div className="member">이승원 외 5명</div>
                                <div className="title">강릉뿌시기</div>
                            </div>
                            <p>2024-08-07</p>
                        </div>
                    </div>
                </div>
            </div>
            <button>이전 여행기록 보기</button>
        </div>
    )
}

export default Travel