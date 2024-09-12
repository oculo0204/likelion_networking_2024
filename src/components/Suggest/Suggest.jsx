import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Back from '../../assets/img/Icon/back.svg';
import image96 from '../../assets/img/suggest/image96.svg';
import topBtn from '../../assets/img/suggest/topBtn.svg';

const Suggest = () => {

    const navigate = useNavigate();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        };

    const travel = [
        { id: 1, name: '일본 다카마쓰 여행' },
        { id: 2, name: '대만' },
        { id: 3, name: '중국' },
        { id: 4, name: '홍콩' },
    ];

    return (
        <div className="container">
            <div className='suggest_wrap'>
                <div className='subHeader'>
                     <button onClick={() => navigate(-1)}>
                        <img src={Back} alt="Back" className='back' />
                    </button>
                    <h1>여행지 추천받기</h1>
                </div>
                   <Link to="/aiSuggest">
                        <button className="whiteBtnWide"> AI 여행지 추천받기 </button>
                    </Link>
                <h2 className="titleMain">지금 바로 떠날 여행지 추천</h2>
                <div className="tabs">
                    {travel.map(destination => (
                        <Link to={`/suggest/${destination.id}`} key={destination.id} className="tab">
                            <h3>{destination.name}</h3>
                        </Link>
                    ))}
                </div>
                <button className="topBtn" onClick={scrollToTop}>
                    <img src={topBtn} alt="Top" />
                </button>
            </div>
        </div>
    );
};

export default Suggest;
