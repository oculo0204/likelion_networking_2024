import React, { useState } from 'react';
import BackIcon from '../../assets/img/back_btn/Icon_back.svg';

const Record = () => {
    const [members] = useState({
        '이해솔': false,
        '이승원': false,
        '박시윤': false
    });
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
        }
    };

    return (
        <div className='Record_wrap container'>
            {/* 상단 헤더 */}
            <div className='back-btn'>    
                <a href='javascript:history.back()'>
                    <img src={BackIcon} alt="Back icon" className='back-btn-img'/>
                </a>
                <h1>여행 지출 기록하기</h1>
            </div>

            <div className="report-section">
                {/* 제목 입력 */}
                <h1>제목을 입력하세요</h1>

                {/* 금액 입력 */}
                <div className="input-field">
                    <input type="input" id="amount" placeholder="지출 금액" />
                    <span className="currency">원</span>
                </div>

                {/* 카테고리 드롭다운 */}
                <div className="dropdown">
                    <label htmlFor="category">카테고리</label>
                    <select id="category">
                        <option value="" disabled selected>카테고리</option>
                        <option value="교통">교통</option>
                        <option value="식사">식사</option>
                        <option value="숙소">숙소</option>
                        <option value="기타">기타</option>
                    </select>
                </div>

                {/* 멤버 드롭다운 */}
                <div className="dropdown">
                    <label htmlFor="member">멤버</label>
                    <select id="member">
                        <option value="" disabled selected>멤버</option>
                        {Object.keys(members).map((member) => (
                            <option key={member} value={member}>
                                {member}
                            </option>
                        ))}
                    </select>
                </div>

                {/* 영수증 첨부 */}
                <div className="receipt">
                    <label htmlFor="receipt">영수증</label>
                    <div className="photo-box">
                        {selectedImage ? (
                            <img src={selectedImage} alt="Receipt" className="uploaded-img" />
                        ) : (
                            <label htmlFor="file-upload" className="upload-label">
                                사진 추가
                                <input
                                    type="file"
                                    id="file-upload"
                                    onChange={handleImageUpload}
                                    style={{ display: 'none' }}
                                />
                            </label>
                        )}
                    </div>
                </div>

                {/* 메모 입력 */}
                <div className="memo">
                    <label htmlFor="memo">메모</label>
                    <textarea id="memo" rows="4" placeholder="내용을 입력하세요..."></textarea>
                </div>
            </div>

            {/* 버튼 영역 */}
            <div className="buttons">
                <button className="submit">저장</button>
                <button className="cancel">취소</button>
            </div>
        </div>
    );
};

export default Record;
