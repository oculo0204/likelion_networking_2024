import React from 'react'
import Back from '../../assets/img/Team/back.svg'
import Plus from '../../assets/img/Team/plus.svg'

const TravelNow = () => {
    return (
        <div className='TravelNow_wrap container'>
             <div>
                <div className="header">
                    <img src={Back} alt="back button" />
                    <h2>강릉 뿌시기</h2>
                </div>
                <div className="main">
                    <button>
                        <img src={Plus} alt="" />
                        <p>지출 기록 추가하기</p>
                    </button>
                    <div className="list_wrap">
                        <div className="list">
                            <div>
                                <div className="member">이승원 외 5명</div>
                                <div className="title">강릉뿌시기</div>
                            </div>
                            <p>2024-08-07</p>
                        </div>
                    </div>
                </div>
            </div>
            <button>여행 끝내고 지출리포트 보러가기</button>
        </div>
    )
}

export default TravelNow