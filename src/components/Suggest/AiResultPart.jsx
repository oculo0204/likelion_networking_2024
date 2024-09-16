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
                    <h2>강원도 속초</h2>
                    <h4 className="partDay">1일차: 출발 및 속초 도착</h4>
                    <li>출발지: 서울</li>
                    <li>이동 수단:
                        <ul>
                            <li>버스: 동서울터미널에서 속초시외버스터미널까지 약 2시간 30분 소요</li>
                            <li>버스 시각: 동서울터미널 출발 시간 08:00 (20~30분 간격으로 출발)</li>
                            <li>요금: 약 20,000원 (일반 버스 기준)</li>
                        </ul>
                    </li>
                    <li className="pTop">도착: 속초시외버스터미널 (예상 11시 도착)</li>
                    <li>이동: 터미널에서 속초까지 택시 또는 시내버스 이용 (택시 약 10~15분 소요, 요금 7,000원 내외)</li>

                    <h4>1. 오후 일정</h4>
                    <li>숙소 체크인: 12:00~13:00
                        <ul>
                            <li>숙소: 속초 시내 게스트하우스 또는 호텔</li>
                            <li>숙소 요금: 1박 8~10만원, 2박 16~20만원</li>
                        </ul>
                    </li>
                    <li className="pTop">점심 식사: 속초 중앙시장 방문 (도보 또는 버스 이동, 약 10~15분)
                        <ul>
                            <li>추천 음식: 닭강정, 생선구이</li>
                            <li>예산: 약 1인당 10,000~15,000원</li>
                        </ul>
                    </li>
                    <li className="pTop">활동: 속초 해수욕장 산책 및 휴식 (속초에서 버스 이용, 약 15분 소요)
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
                    <li className="pTop">저녁 활동: 청초호 호수 산책
                        <ul>
                            <li>저녁 식사: 시내버스 또는 도보 이동 (약 10~15분 소요)</li>
                            <li>활동: 호수 주변 야경 감상 및 산책</li>
                            <li>예산: 무료</li>
                        </ul>
                    </li>
                    <li className="pTop">숙소 귀환 및 휴식</li>
                    <h4 className="partDay">2일차: 설악산 및 아바이마을 탐방</h4>
                    <h4>1. 아침 일정</h4>
                    <li>아침 식사: 숙소 근처 카페 또는 시장에서 간단히 식사
                        <ul>
                            <li>추천 음식: 베이커리, 커피</li>
                            <li>예산: 1인당 5,000~7,000원</li>
                        </ul>
                    </li>
                    <li className="pTop">활동: 설악산 국립공원 탐방
                        <ul>
                            <li>이동: 시외버스 또는 택시 이용 (약 30분 소요, 버스 요금 1,500원, 택시 요금 약 15,000원)</li>
                            <li>활동: 소공원에서 케이블카 탑승 (왕복 약 10,000원) 또는 비룡폭포까지 가벼운 등산</li>
                            <li>예산: 1인당 15,000원~20,000원</li>
                        </ul>
                    </li>
                    <h4>2. 오후 일정</h4>
                    <li>점심 식사: 설악산 근처 식당에서 지역 음식 맛보기
                        <ul>
                            <li>추천 음식: 산채비빔밥, 메밀국수</li>
                            <li>예산: 1인당 10,000~15,000원</li>
                        </ul>
                    </li>
                    <li className="pTop">활동: 아바이마을 방문 (설악산에서 버스 또는 택시 이용, 약 20분 소요)
                        <ul>
                            <li>활동: 갯배 체험 (1인당 500원) 및 드라마 촬영지 투어</li>
                            <li>예산: 총 5,000원 내외</li>
                        </ul>
                    </li>
                    <h4>3. 저녁 일정</h4>
                    <li>저녁 식사: 아바이마을에서 유명한 아바이순대와 오징어순대 맛보기
                        <ul>
                            <li>예산: 1인당 15,000원 내외</li>
                        </ul>
                    </li>
                    <h4 className="partDay">3일차: 속초 시내 및 출발</h4>
                    <h4>1. 아침 일정</h4>
                    <li>아침 식사: 속초 중앙시장</li>
                    <li>이동
                        <ul>
                            <li>도보: 숙소에서 도보로 약 10~15분 소요</li>
                            <li>버스: 7-1번, 9번 버스를 타고 중앙시장 정류장에서 하차 (약 5분 소요)</li>
                            <li>추천 음식: 아침에 간단히 먹을 수 있는 순두부 백반, 떡볶이, 전통 시장 내 베이커리 등</li>
                            <li>예산: 1인당 5,000원 내외</li>
                        </ul>
                    </li>
                    <h4>2. 오후 일정</h4>
                    <li>활동: 속초 시내 탐방</li>
                    <li>청호동 아바이마을:
                        <ul>
                            <li>이동: 도보 또는 시내버스 이용 (숙소에서 약 10~15분 소요)</li>
                            <li>활동: 갯배 타기, 아바이마을에서의 전통적인 분위기 감상</li>
                            <li>갯배: 속초 중앙시장 근처에서 타고 청호동 아바이마을로 이동 (1인당 500원)</li>
                            <li>예산: 갯배 비용 포함, 1인당 약 5,000원 내외</li>
                        </ul>
                    </li>
                    <li>설악 케이블카:
                        <ul>
                            <li>이동: 시내버스 또는 택시로 이동 (약 30분 소요)</li>
                            <li>활동: 설악산 소공원에서 케이블카 탑승, 권금성 정상에서 멋진 경치 감상</li>
                            <li>예산: 1인당 약 10,000~15,000원
                            </li>
                        </ul>
                    </li>
                    <li className="pTop">점심 식사: 대포항 근처에서 해물탕 또는 매운탕
                        <ul>
                            <li>이동: 설악산에서 대포항으로 이동 (약 20분 소요)</li>
                            <li>추천 식당: 대포항 주변의 해물 전문점</li>
                            <li>예산: 1인당 15,000~20,000원</li>
                            <li>활동: 식사 후 대포항에서 바다를 바라보며 산책</li>
                        </ul>
                    </li>
                    <li className="pTop">기념품 구매 및 마지막 산책:
                        <ul>
                            <li>이동: 대포항에서 속초 중앙시장으로 이동 (시내버스 또는 택시, 약 10분 소요)</li>
                            <li>활동: 속초 중앙시장에서 속초 특산품(오징어, 명태 등) 구매</li>
                            <li>예산: 1인당 약 10,000~20,000원 내외</li>
                        </ul>
                    </li>
                    <li className="pTop">출발 : 속초에서 서울로 귀환
                        <ul>
                            <li>이동: 속초시외버스터미널로 이동 (도보 또는 택시, 약 10~15분 소요)</li>
                            <li>버스: 속초시외버스터미널에서 동서울터미널로 출발 (오후 3~4시 출발</li>
                            <li>소요 시간: 약 2시간 30분</li>
                            <li>예상 도착 시간: 동서울터미널 오후 6시~7시 도착</li>
                        </ul>
                    </li>
                    <h4 className="pTop">총 예산 (최종 정리)</h4>
                    <p>
                        1. 숙박: 2박 16~20만원 (총 3인 기준)<br/>
                        2. 식사: 1인당 약 100,000원 (3일간)<br/>
                        3. 활동 및 교통비: 1인당 약 60,000~70,000원<br/>
                        4. 기념품 비용: 1인당 약 10,000~20,000원<br/>
                        5. 총 예상 예산: 인당 35~40만원 내외 (3인 기준 약 105~120만원)
                    </p>

                </div>
                <div className="buttons">
                    <Link to="/team">
                        <button className="blueBtnWide"> 여행 떠날 그룹 생성하기</button>
                    </Link>
                </div>
                <button className="topBtn" onClick={scrollToTop}>
                    <img src={topBtn} alt="Top"/>
                </button>
            </div>
        </div>
    );
};

export default AiResultPart;
