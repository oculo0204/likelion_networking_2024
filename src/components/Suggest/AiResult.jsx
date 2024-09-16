import React from 'react';
import { Link, useNavigate, useLocation} from 'react-router-dom';
import Back from '../../assets/img/Icon/back.svg';

const AiResult = () => {
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

    const handleBoxClick = () => {
        navigate('/aiResultPart', {
            state: {
                budget: budget,
                startyear: startyear,
                startmonth: startmonth,
                startday: startday,
                backyear: backyear,
                backmonth: backmonth,
                backday: backday,
                people: people,
            },
        });
    };

    return (
        <div className='AiResult_wrap container'>
            <div>
                <div className='subHeader'>
                    <button onClick={() => navigate(-1)}>
                        <img src={Back} alt="Back" className='back'/>
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
                <div className="resultBox" onClick={handleBoxClick}>
                    <h2>강원도 속초</h2>
                    <ul>
                        <li>숙박: 저렴한 게스트하우스 또는 호텔 (1박 약 8~10만원)</li>
                        <li>활동: 설악산 등산, 속초해수욕장, 아바이마을 방문, 청초호 호수 산책</li>
                        <li>식사: 속초 중앙시장 (생선구이, 회, 닭강정 등)에서 저렴하고 맛있는 식사 가능</li>
                        <li>예산: 숙박 20만원 + 식사 및 활동 20~25만원</li>
                    </ul>
                </div>
                <div className="resultBox" onClick={handleBoxClick}>
                    <h2>전라남도 여수</h2>
                    <ul>
                        <li>숙박: 게스트하우스 또는 저렴한 호텔 (1박 약 7~9만원)</li>
                        <li>활동: 돌산대교 야경, 오동도 산책, 여수해상케이블카, 이순신광장</li>
                        <li>식사: 여수 낭만포차 거리에서 현지 음식(삼합, 서대회 등) 맛보기</li>
                        <li>예산: 숙박 18만원 + 식사 및 활동 20~25만원</li>
                    </ul>
                </div>
                <div className="resultBox" onClick={handleBoxClick}>
                    <h2>부산</h2>
                    <ul>
                        <li>숙박: 호텔 또는 모텔 (1박 약 10만원)</li>
                        <li>활동: 해운대, 광안리, 감천문화마을, 부산 타워, 자갈치시장</li>
                        <li>식사: 해산물 및 부산 밀면, 돼지국밥 등 현지 음식 체험</li>
                        <li>예산: 숙박 20만원 + 식사 및 활동 20~25만원</li>
                    </ul>
                </div>
                <div className="resultBox" onClick={handleBoxClick}>
                    <h2>경주</h2>
                    <ul>
                        <li>숙박: 한옥스테이 또는 게스트하우스 (1박 약 8~10만원)</li>
                        <li>활동: 불국사, 석굴암, 첨성대, 동궁과 월지 야경, 교촌마을</li>
                        <li>식사: 경주 황남빵, 경주식 비빔밥, 보문단지 주변 맛집</li>
                        <li>예산: 숙박 20만원 + 식사 및 활동 20~25만원</li>
                    </ul>
                </div>
                <div className="resultBox" onClick={handleBoxClick}>
                    <h2>제주도</h2>
                    <ul>
                        <li>숙박: 저렴한 펜션 또는 게스트하우스 (1박 약 7~10만원)</li>
                        <li>활동: 성산일출봉, 섭지코지, 한라산 등반, 제주 올레길 걷기</li>
                        <li>식사: 흑돼지, 고기국수, 제주 전통 음식 체험</li>
                        <li>예산: 숙박 20만원 + 식사 및 활동 20~25만원 (항공권 포함 시 예산 초과 가능)</li>
                    </ul>
                </div>
                <div className="buttons">
                    <Link to="/aiSuggest">
                        <button className="whiteBtnWide"> 다른 여행지 추천 받기</button>
                    </Link>
                    <Link to="/team">
                        <button className="blueBtnWide"> 여행 떠날 그룹 생성하기</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AiResult;
