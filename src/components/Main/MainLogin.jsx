import React from 'react';
import { Link } from 'react-router-dom';
import MainSwiper from './MainSwiper'

const MainLogin = () => {

    return (
        <div className='mainLogin_wrap container'>
            <div className="boxes">
                <MainSwiper />
                <div className="box">
                    <h2 className="box-title">여행 떠나기</h2>
                    <div className="btns">
                        <Link to="/aiSuggest">
                            <button>AI 여행지 추천받기</button>
                        </Link>
                        <Link to="/team">
                            <button>그룹 생성하기</button>
                        </Link>
                    </div>
                </div>
                <div className="box">
                    <h2 className="box-title">나의 여행기록</h2>
                    <div className="btns">
                        <Link to="/travel/:now">
                            <button>현재 진행중인 여행</button>
                        </Link>
                        <Link to="/travel/done">
                            <button>이전 여행</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainLogin

