import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Back from '../../assets/img/Icon/back.svg';
import image96 from '../../assets/img/suggest/image96.svg';
import topBtn from '../../assets/img/suggest/topBtn.svg';

const SuggestDetail = () => {
    const { id } = useParams(); // URL에서 id 파라미터 추출
    const navigate = useNavigate();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        };


    return (
        <div className="container">
            <div className='suggest_wrap'>
                    <div className='subHeader'>
                         <button onClick={() => navigate(-1)}>
                            <img src={Back} alt="Back" className='back' />
                        </button>
                        <h1>지금 바로 떠날 여행지 추천</h1>
                    </div>
                    <div className="detailBox">
                        <h2 className="detailMainTitle">일본 중부 카가와 현에 위치한 다카마쓰</h2>
                        <p>
                            다카마쓰는 일본의 소도시이지만 근교로 이동할 수 있는 교통수단이 잘 되어있어 3박4일 코스로 즐기기 딱이랍니다.<br />
                            에어서울에는 인천에서 다카마쓰까지 직항편이 있어 더더욱 편하게 다녀올 수 있어요.<br />
                            우동 투어, 섬 투어, 온천 투어, 쇼핑 등 다카마쓰를 즐길 수 있는 요소들은 정말 다양해요.<br />
                            오늘은 자연부터 트렌디한 카페까지 즐길 수 있는 다카마쓰의 여행 코스를 소개합니다.
                        </p>
                        <h4 className="detailSubTitle">다카마쓰 3박4일 여행코스</h4>
                        <p>
                            아래 일정은 에디터가 직접 소화한 3박4일 일정이에요.<br />
                            다카마쓰는 일본의 소도시인 만큼 바다와 자연을 감상할 수 있는 자연 명소가 많은 편이랍니다.<br />
                            하지만 테라마치, 마루가메마치, 이온몰 등 다양한 쇼핑가와 쇼핑몰도 있어 쇼핑까지 알차게 즐길 수 있어요.<br />
                        </p>
                         <div className="recomm">
                            <h2> 추천 일정</h2>
                            <p>
                                1일차 <br />
                                ✈️ 다카마쓰 공항 도착 <br />
                                🍜 곤피라 우동 <br />
                                🏯 고토히라궁 <br />
                                ♨️ 고토산가쿠 온천 료칸 <br /><br />

                                2일차 <br />
                                🛍 테라마치 쇼핑가 <br />
                                ☕️ 기타하마앨리 <br />
                                🏞 리쓰린공원 <br />
                                🛒 이온몰 <br /><br />

                                3일차 <br />
                                🏝 데지마 <br />
                                🚩쇼도시마 섬 투어 <br /><br />

                                4일차 <br />
                                🌳 다마모공원 ✈️ 다카마쓰 공항으로 이동 <br />
                            </p>
                         </div>
                    </div>
                    <button className="topBtn" onClick={scrollToTop}>
                        <img src={topBtn} alt="Top" />
                    </button>
                </div>
        </div>

    );
};

export default SuggestDetail;
