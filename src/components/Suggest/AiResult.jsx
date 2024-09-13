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
        navigate('/aiResultPart');
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
                <div className="buttons">
                <Link to="/aiSuggest"> {/* 링크 재설정 필요 */}
                    <button className="whiteBtnWide"> 다른 여행지 추천 받기 </button>
                </Link>
                <Link to="/aiSuggest"> {/* 링크 재설정 필요 */}
                    <button className="blueBtnWide"> 여행 떠날 그룹 생성하기 </button>
                </Link>
                </div>
            </div>
        </div>
    );
};

export default AiResult;
