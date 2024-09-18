import React from 'react';
import Img01 from '../../assets/img/Main/swiper01.png';
import Img02 from '../../assets/img/Main/swiper02.png';
import Img03 from '../../assets/img/Main/swiper03.png';
import Img04 from '../../assets/img/Main/swiper04.png';
import Img05 from '../../assets/img/Main/swiper05.png';
import Img06 from '../../assets/img/Main/swiper06.png';
import Img07 from '../../assets/img/Main/swiper07.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const slides = [
    { month: '6월', img: Img01 },
    { month: '7월', img: Img02 },
    { month: '8월', img: Img03 },
    { month: '9월', img: Img04 },
    { month: '10월', img: Img05 },
    { month: '11월', img: Img06 },
    { month: '12월', img: Img07 }
];

const MainSwiper = () => {
    return (
        <div className="box">
            <h2 className="box-title">지금 바로 떠날 여행지 추천</h2>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper image-container">
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className='suggest'>
                            <p>{slide.month} 국내 여행지</p>
                            <img src={slide.img} alt={`${slide.month} 국내 여행지`} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default MainSwiper;
