import React from 'react'
import IconBack from '../../assets/img/back_btn/Icon_back.svg';
import WriteBtn from '../../assets/img/Mypage/profile-write.svg'; 
import DetailBtn from '../../assets/img/Mypage/toDetail-btn.svg';
import DefaultProfilePic from '../../assets/img/Mypage/profile_default.svg'; // 임시 프로필 이미지

const Mypage = () => {
    // 나중에 백엔드에서 프로필 이미지 URL을 가져와야 할 부분
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
            </div>
            <div className='mytravel-contents'>
                <h1>로그아웃</h1>
            </div>
        </main>
    )
}

export default Mypage