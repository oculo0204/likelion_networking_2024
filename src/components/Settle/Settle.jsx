import React, { useState } from 'react';
import BackIcon from '../../assets/img/back_btn/Icon_back.svg';

const Settle = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState('');
    const [selectedMember, setSelectedMember] = useState('');
    const [members, setMembers] = useState({
        '이해솔': false,
        '이승원': false,
        '박시윤': false,
    });

    const handleProfileClick = (user) => {
        setSelectedUser(user);
        setModalOpen(true);
    };

    const handleMemberChange = (event) => {
        const selectedMember = event.target.value;
        setSelectedMember(selectedMember);  // 드롭다운에서 선택된 멤버 상태 업데이트
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedUser('');
    };

    const totalCollected = 1000000;
    const totalSpent = 980000; // 모자란 금액 예시
    const remainingAmount = totalCollected - totalSpent;

    return (
        <div className='Settle_wrap container'>
            {/* 상단 헤더 */}
            <div className='back-btn'>
                <a href='javascript:history.back()'>
                    <img src={BackIcon} alt="Back icon" className='back-btn-img'/>
                </a>
                <h1>금액 정산하기</h1>
            </div>

            {/* 정산 정보 */}
            <div className="settlement-info">
                <h2>{remainingAmount > 0 ? `${remainingAmount.toLocaleString()}원이 남았어요!` : `${Math.abs(remainingAmount).toLocaleString()}원이 모자라요!`}</h2>
                <div className="settlement-details">
                    <div className="detail-row">
                        <span>여행 전 걷은 금액</span>
                        <span>{totalCollected.toLocaleString()}원</span>
                    </div>

                    <span className="minus-symbol">—</span>

                    <div className="detail-row">
                        <span>총 지출액</span>
                        <span>{totalSpent.toLocaleString()}원</span>
                    </div>
                    <div className="underline"></div>
                    <div className="remaining-amount" style={{ color: remainingAmount > 0 ? 'green' : 'red' }}>
                        {remainingAmount > 0 ? `+ ${remainingAmount.toLocaleString()}원` : `${remainingAmount.toLocaleString()}원`}
                    </div>
                </div>
            </div>

            {/* 남은 금액이 양수일 경우 */}
            {remainingAmount > 0 && (
                <div className="member-settlement">
                    <div className="settlement-block">
                        <h3>6,000원 씩 받아가세요!</h3>
                        <p className="profile-info">프로필을 누르면 계좌번호가 복사돼요</p>
                        <div className="profile-group">
                            <div className="profile" onClick={() => handleProfileClick('이승원')}>
                                <div className="profile-img"></div>
                                <span>이승원님</span>
                            </div>
                            <div className="profile" onClick={() => handleProfileClick('박시윤')}>
                                <div className="profile-img"></div>
                                <span>박시윤님</span>
                            </div>
                        </div>
                    </div>

                    <div className="settlement-block">
                        <h3>8,000원 씩 받아가세요!</h3>
                        <p className="profile-info">프로필을 누르면 계좌번호가 복사돼요</p>
                        <div className="profile-group">
                            <div className="profile" onClick={() => handleProfileClick('이해솔')}>
                                <div className="profile-img"></div>
                                <span>이해솔님</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* 남은 금액이 음수일 경우 */}
            {remainingAmount < 0 && (
                <div className="member-settlement">
                    <div className="settlement-block">
                        <h3>4,000원 씩 송금해주세요!</h3>

                        {/* 멤버 드롭다운 */}
                        <div className="dropdown">
                            <select onChange={handleMemberChange} value={selectedMember}>
                                <option value="" disabled>송금할 예금주를 선택하세요</option>
                                {Object.keys(members).map((member) => (
                                    <option key={member} value={member}>
                                        {member}
                                    </option>
                                ))}
                            </select>

                            <p className="profile-info">프로필을 누르면 계좌번호가 복사돼요</p>

                            {/* 선택된 멤버 프로필 */}
                            {selectedMember && (
                                <div className="profile-group">
                                    <div className="profile" onClick={() => handleProfileClick(selectedMember + '님')}>
                                        <div className="profile-img"></div>
                                        <span>{selectedMember}님</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* 정산 완료하기 버튼 */}
            <button className="finish-btn">정산 완료하기</button>

            {/* 모달창 */}
            {modalOpen && (
                <>
                    <div className="modal-overlay" onClick={closeModal}></div>
                    <div className="modal">
                        <div className="modal-content">
                            <p>계좌번호가 복사되었어요!</p>
                            <p className="small-text">{selectedUser}님의 계좌번호를 편리하게 붙여넣으세요!</p>
                            <button onClick={closeModal} className="close-btn">✕</button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Settle;
