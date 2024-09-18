import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Back from '../../assets/img/Icon/back.svg';
import topBtn from '../../assets/img/suggest/topBtn.svg';

const AiResultPart = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { state } = location;
    const { budget, startyear, startmonth, startday, backyear, backmonth, backday, people } = state || {};
    const [detailPlan, setDetailPlan] = useState([]);

    const startDate = new Date(startyear, startmonth - 1, startday);
    const endDate = new Date(backyear, backmonth - 1, backday);
    const nights = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) - 1;
    const days = nights + 1;

    useEffect(() => {
        const fetchDetailPlan = async () => {
            try {
                const response = await axios.post('http://beancp.com:8082/travel/recommend/detail', {
                    detail: "강원도 속초"
                });
                setDetailPlan(response.data);
            } catch (error) {
                console.error('API 요청 실패:', error);
            }
        };

        fetchDetailPlan();
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className='AiResultPart_wrap container'>
            <div>
                <div className='subHeader'>
                    <button onClick={() => navigate(-1)}>
                        <img src={Back} alt="Back" className='back' />
                    </button>
                    <h1>AI 여행지 추천 결과</h1>
                </div>
                <div className="blueBox">
                    <div className="infoTags">
                        <div className="tag">{budget}원</div>
                        <div className="tag">{nights}박 {days}일</div>
                        <div className="tag">{people}명</div>
                    </div>
                </div>
                <div className="detailBox">
                    {detailPlan.map((detail, index) => (
                        <p key={index}>{detail}</p>
                    ))}
                </div>
                <div className="buttons">
                    <button className="blueBtnWide" onClick={() => navigate('/team')}>여행 떠날 그룹 생성하기</button>
                </div>
                <button className="topBtn" onClick={scrollToTop}>
                    <img src={topBtn} alt="Top" />
                </button>
            </div>
        </div>
    );
};

export default AiResultPart;
