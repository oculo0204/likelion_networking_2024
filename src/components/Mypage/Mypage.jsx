import React, { useState } from 'react';
import IconBack from '../../assets/img/back_btn/Icon_back.svg';
import WriteBtn from '../../assets/img/Mypage/profile-write.svg'; 
import DetailBtn from '../../assets/img/Mypage/toDetail-btn.svg';
import Close from '../../assets/img/Mypage/close.svg';
import DefaultProfilePic from '../../assets/img/Mypage/profile_default.svg'; // 임시 프로필 이미지
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Mypage = () => {
    const [isLogoutVisible, setIsLogoutVisible] = useState(false);
    const navigate = useNavigate;
    const handleLogin = () => {
        document.getElementById("actionSheet").classList.add("active");
    };

    const close = () => {
        document.getElementById("actionSheet").classList.remove("active");
        setTimeout(() => {
            setIsLogoutVisible(false); // 3초 후에 로그아웃 상태 초기화
        }, 1000); 
    };

    const handleLogout = async() => {
        setIsLogoutVisible(true); // 로그아웃 완료 상태 토글 띄어줌
    
    };

    const profileImageUrl = DefaultProfilePic; // 임시로 로컬 이미지를 사용

    return (
        <main className='container mypage-main'>
            <div className='back-btn-head'>    
                <a href='javascript:history.back()'>
                    <img src={IconBack} alt="Back Icon" className='back-btn-img'/>
                </a>
                <h1>마이페이지</h1>
            </div>
            <div className='mypage-contents'>
                <div className='profile-info'>
                    <img src={profileImageUrl} alt="Profile" className='profile-image' />
                    <h2>@@@ 님</h2>
                    <button className='write-btn'>
                        <img src={WriteBtn} alt="write-btn" />
                    </button>
                </div>
                <h1 className='mytravel-h1'>나의 여행기록</h1>
                <div className='mytravel-contents'>
                    <div className='mytravel-c'>
                        <h1>현재 진행 중인 여행</h1>
                        <button><img src={DetailBtn} alt="" /></button>
                    </div>
                    <div className='mytravel-c'>
                        <h1>이전 여행</h1>
                        <button><img src={DetailBtn} alt="" /></button>
                    </div>
                </div>
                <div className='mytravel-contents'>
                    <div className='mytravel-c'>
                        <h1>지출리포츠 모아보기</h1>
                        <button><img src={DetailBtn} alt="" /></button>
                    </div>
                    <div className='mytravel-c'>
                        <h1>정산내역 모아보기</h1>
                        <button><img src={DetailBtn} alt="" /></button>
                    </div>
                </div>
                <button className='logout-btn' onClick={handleLogin}>
                    <h1>로그아웃</h1>
                </button>
            </div>
            <div className="action-sheet" id="actionSheet">
                <div className="action-options">
                    <button className="close" onClick={close}><img src={Close} alt="닫기버튼" /></button>
                    {!isLogoutVisible ? (
                        <div className='option'>
                            <h1>로그아웃 하시겠습니까?</h1>
                            <button onClick={handleLogout}>로그아웃하기</button>
                        </div>
                    ) : (
                        <div className='toLogout'>
                            <h1>로그아웃 되었습니다.</h1>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
};

export default Mypage;
