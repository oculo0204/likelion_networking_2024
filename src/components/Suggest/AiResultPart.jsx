import React from 'react';
import { Link, useNavigate, useLocation} from 'react-router-dom';
import Back from '../../assets/img/Icon/back.svg';
import topBtn from '../../assets/img/suggest/topBtn.svg';

const AiResultPart = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const { state } = location;
    const { budget, startyear, startmonth, startday, backyear, backmonth, backday, people } = state || {};

    const startDate = new Date(startyear, startmonth - 1, startday); // 월은 0부터 시작
    const endDate = new Date(backyear, backmonth - 1, backday);
    const diffTime = endDate - startDate;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) - 1; // 총 일수 -1일
    const nights = diffDays;
    const days = nights + 1;

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        };

    return (
        <div className='container'>
            <div className='suggest_wrap'>
                <div className='subHeader'>
                     <button onClick={() => navigate(-1)}>
                        <img src={Back} alt="Back" className='back' />
                    </button>
                    <h1>AI 여행지 추천 결과</h1>
                </div>

                <div className="blueBox">
                    <div className="infoTags">
                        <div className="tag">{budget}만원</div>
                        <div className="tag">{nights}박 {days}일</div>
                        <div className="tag">{people}명</div>
                    </div>
                </div>
                <div className="detailBox">
                    <h2>강원도 속초</h2>
                    <h4>1일차: 출발 및 속초 도착</h4>
                    <li>출발지: 서울</li>
                    <li>이동 수단:
                        <ul>
                            <li>버스: 동서울터미널에서 속초시외버스터미널까지 약 2시간 30분 소요</li>
                            <li>버스 시각: 동서울터미널 출발 시간 08:00 (20~30분 간격으로 출발)</li>
                            <li>요금: 약 20,000원 (일반 버스 기준)</li>
                        </ul>
                    </li>
                    <li>도착: 속초시외버스터미널 (예상 11시 도착)</li>
                    <li>이동: 터미널에서 속초까지 택시 또는 시내버스 이용 (택시 약 10~15분 소요, 요금 7,000원 내외)</li>

                    <h4>1. 오후 일정</h4>
                    <li>숙소 체크인: 12:00~13:00
                        <ul>
                            <li>숙소: 속초 시내 게스트하우스 또는 호텔</li>
                            <li>숙소 요금: 1박 8~10만원, 2박 16~20만원</li>
                        </ul>
                    </li>
                    <li>점심 식사: 속초 중앙시장 방문 (도보 또는 버스 이동, 약 10~15분)
                        <ul>
                            <li>추천 음식: 닭강정, 생선구이</li>
                            <li>예산: 약 1인당 10,000~15,000원</li>
                        </ul>
                    </li>
                    <li>활동: 속초 해수욕장 산책 및 휴식 (속초에서 버스 이용, 약 15분 소요)
                        <ul>
                            <li>해수욕장 활동: 해변에서 산책 및 사진 촬영, 물놀이</li>
                            <li>예산: 무료</li>
                        </ul>
                    </li>

                    <h4>2. 저녁 일정</h4>
                    <li>저녁 식사: 속초 시내 해산물 전문점 방문
                        <ul>
                            <li>추천 음식: 회, 조개구이</li>
                            <li>예산: 1인당 20,000~30,000원</li>
                        </ul>
                    </li>
                    <li>저녁 활동: 청초호 호수 산책
                        <ul>
                            <li>저녁 식사: 시내버스 또는 도보 이동 (약 10~15분 소요)</li>
                            <li>활동: 호수 주변 야경 감상 및 산책</li>
                            <li>예산: 무료</li>
                        </ul>
                    </li>
                    <li>숙소 귀환 및 휴식</li>
                </div>
                <div className="buttons">
                <Link to="/aiSuggest"> {/* 링크 재설정 필요 */}
                    <button className="blueBtnWide"> 여행 떠날 그룹 생성하기 </button>
                </Link>
                </div>
                <button className="topBtn" onClick={scrollToTop}>
                    <img src={topBtn} alt="Top" />
                </button>
            </div>
        </div>
    );
};

export default AiResultPart;
