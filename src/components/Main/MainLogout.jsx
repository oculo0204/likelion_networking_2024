import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import arrowLeft from '../../assets/img/arrow/arrowLeft.svg';
import arrowRight from '../../assets/img/arrow/arrowRight.svg';
import image111 from '../../assets/img/suggest/image111.svg';
import image96 from '../../assets/img/suggest/image96.svg';

const MainLogout = () => {

    // 슬라이드 이미지 배열
    const images = [image111, image96]; // image96d은 임시로 넣었습니다!
    const [currentIndex, setCurrentIndex] = useState(0);

    // 왼쪽 화살표 클릭 시
    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    // 오른쪽 화살표 클릭 시
    const handleNextClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className='mainLogout_wrap container'>
            <div className="boxes">
                <div className="box">
                    <h2 className="box-title">지금 바로 떠날 여행지 추천</h2>
                    <div className="image-container">
                       <img className="arrow left" src={arrowLeft} alt="왼쪽 화살표" onClick={handlePrevClick} />
                       <img src={images[currentIndex]} alt="여행지 추천" />
                       <img className="arrow right" src={arrowRight} alt="오른쪽 화살표" onClick={handleNextClick} />
                    </div>
                    <div className="des">
                        <p className="description">밀양 언택트 여행 :: 혼자 여행하기 좋은 여행코스, ...</p>
                        <p className="date">2024-08-07</p>
                    </div>
                </div>
                <div className="box">
                    <h2 className="box-title">여행 떠나기</h2>
                    <p className="box-subTitle">로그인하고 더 많은 서비스를 이용해보세요!</p>
                    <div className="buttons">
                       <Link to="/Login">
                           <button className="blueBtn">로그인</button>
                       </Link>
                       <Link to="/login/signup">
                           <button className="whiteBtn">회원가입</button>
                       </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainLogout