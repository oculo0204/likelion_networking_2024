import React, { useState } from 'react'
import Back from '../../assets/img/Team/back.svg'
import Plus from '../../assets/img/Team/plus.svg'
import Down from '../../assets/img/Team/down.svg'
import { Link, useNavigate } from 'react-router-dom'

const TravelDetail = () => {
    const [check, setCheck] = useState('최신순');
    const navigation = useNavigate();

    const onBack = () => {
        navigation(-1);
    }

    const type = ['최신순', '오래된순', '지출 많은 순', '지출 적은 순']

    return (
        <div className='TravelDetail_wrap container'>
            <div>
                <div className="nav"></div>
                <div className="header">
                    <img src={Back} alt="back button" onClick={() => { onBack() }} />
                    <h2>강릉 뿌시기</h2>
                </div>
                <Link to='/'>
                    <img src={Plus} alt="" />
                    <p>지출 기록 추가하기</p>
                </Link>
                <div className="main travel_main">
                    <label>
                        <select value={check} onChange={(e) => setCheck(e.target.value)}>
                            <option value="">년</option>
                            {type.map((y) => (
                                <option key={y} value={y}>
                                    {y}
                                </option>
                            ))}
                        </select>
                        <img src={Down} alt="" />
                    </label>
                    <div className="list_wrap">
                        <div className="list">
                            <div>
                                <div className="member travel_memeber">교통</div>
                                <div className="title">강릉뿌시기</div>
                            </div>
                            <p>2024-08-07</p>
                        </div>
                        <div className="list">
                            <div>
                                <div className="member travel_memeber">교통</div>
                                <div className="title">강릉뿌시기</div>
                            </div>
                            <p>2024-08-07</p>
                        </div>
                        <div className="list">
                            <div>
                                <div className="member travel_memeber">교통</div>
                                <div className="title">강릉뿌시기</div>
                            </div>
                            <p>2024-08-07</p>
                        </div>
                    </div>
                </div>
            </div>
            <button><Link to='/'>여행 끝내고 지출리포트 보러가기</Link></button>
        </div>
    )
}

export default TravelDetail