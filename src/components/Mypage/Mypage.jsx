import React, { useState, useEffect } from 'react';
import IconBack from '../../assets/img/back_btn/Icon_back.svg';
import WriteBtn from '../../assets/img/Mypage/profile-write.svg'; 
import DetailBtn from '../../assets/img/Mypage/toDetail-btn.svg';
import Close from '../../assets/img/Mypage/close.svg';
import DefaultProfilePic from '../../assets/img/Mypage/profile_default.svg'; // 임시 프로필 이미지
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';

const Mypage = () => {
    const [isLogoutVisible, setIsLogoutVisible] = useState(false);
    const [profileImageUrl, setProfileImageUrl] = useState(DefaultProfilePic);
    const [userName, setUserName] = useState('@@@ 님'); // 기본값 설정
    const navigate = useNavigate();

    useEffect(() => {
        // 사용자 정보 가져오기
        const fetchUserInfo = async () => {
            try {
                const response = await axios.get('http://beancp.com:8082/user/userInfo', { withCredentials: true });
                const userInfo = response.data.info[0]; // 배열에서 첫 번째 객체를 선택

                if (userInfo.profileImageUrl) {
                    setProfileImageUrl(userInfo.profileImageUrl); // 서버에서 가져온 이미지 URL로 업데이트
                }
                if (userInfo.name) {
                    setUserName(`${userInfo.name} 님`); // 서버에서 가져온 이름으로 업데이트
                }
            } catch (error) {
                console.error('사용자 정보 가져오기 실패:', error);
            }
        };

        fetchUserInfo();
    }, []);

    const handleLogin = () => {
        document.getElementById("actionSheet").classList.add("active");
    };

    const close = () => {
        document.getElementById("actionSheet").classList.remove("active");
        setTimeout(() => {
            setIsLogoutVisible(false); // 3초 후에 로그아웃 상태 초기화
        }, 1000); 
    };

    const handleLogout = async () => {
        try {
            await axios.get('http://beancp.com:8082/login/logout', { withCredentials: true });
            console.log("로그아웃 성공");
            setIsLogoutVisible(true); // 로그아웃 완료 상태 토글 띄어줌
            setTimeout(() => navigate('/login'), 2000); // 2초 후 로그인 페이지로 이동
        } catch (err) {
            console.log("로그아웃 실패", err);
        }
    };

    const handleWriteClick = () => {
        navigate('/mypage/profile'); // write-btn 클릭 시 '/mypage/profile'로 이동
    };

    // 현재 진행 중인 여행 페이지로 이동하는 함수
    const handleTravelClick = () => {
        const now = 'current'; //임시
        navigate(`/travel/${now}`);
    };

    const handlePastTravelClick = () =>{
        const now ='done';
        navigate(`/travel/${now}`);
    }
    const handleReportClick=()=>{
        navigate(`/report`);
    }
    const handleMoneyClick=() =>{
        navigate(`/report`);
    }

    return (
        <main className='container mypage-main'>
            <div className='back-btn-head'>    
                <Link to='/mainlogout'>
                    <img src={IconBack} alt="Back Icon" className='back-btn-img'/>
                </Link>
                <h1>마이페이지</h1>
            </div>
            <div className='mypage-contents'>
                <div className='profile-info'>
                    <img src={profileImageUrl} alt="Profile" className='profile-image' />
                    <h2>{userName}</h2> {/* userName에 따라 동적으로 표시 */}
                    <button className='write-btn' onClick={handleWriteClick}>
                        <img src={WriteBtn} alt="write-btn" />
                    </button>
                </div>
                <h1 className='mytravel-h1'>나의 여행기록</h1>
                <div className='mytravel-contents'>
                    <div className='mytravel-c'>
                        <h1>현재 진행 중인 여행</h1>
                        <button onClick={handleTravelClick}><img src={DetailBtn} alt="현재 진행 중인 여행" /></button>
                    </div>
                    <div className='mytravel-c'>
                        <h1>이전 여행</h1>
                        <button><img src={DetailBtn} onClick={handlePastTravelClick} alt="이전 여행" /></button>
                    </div>
                </div>
                <div className='mytravel-contents'>
                    <div className='mytravel-c'>
                        <h1>지출리포트 모아보기</h1>
                        <button><img src={DetailBtn} onClick={handleReportClick}alt="지출리포트 모아보기" /></button>
                    </div>
                    <div className='mytravel-c'>
                        <h1>정산내역 모아보기</h1>
                        <button><img src={DetailBtn} onClick={handleMoneyClick}alt="정산내역 모아보기" /></button>
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
