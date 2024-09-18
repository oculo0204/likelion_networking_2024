import React from 'react';
import BackIcon from '../../assets/img/back_btn/Icon_back.svg';
import Img01 from '../../assets/img/Record/img01.png';
import { useNavigate } from 'react-router-dom';

const Record = () => {
    const navigation = useNavigate();

    const onBack = () => {
        navigation(-1)
    }

    const GoEdit = () => {
        navigation('/record_edit')
    }

    return (
        <div className='Record_wrap container'>
            <div>
                <div className="header">
                    <img src={BackIcon} alt="back button" onClick={() => { onBack() }} />
                    <h2>여행 지출 기록하기</h2>
                </div>
                <div className="main">
                    <div className="cate_wrap">
                        <h1><span>24,000</span>원</h1>
                        <p className="cate">교통</p>
                    </div>
                    <div className="member_wrap">
                        <p>멤버</p>
                        <div>
                            <p className='cate'>이승원</p>
                            <p className='cate'>박시윤</p>
                        </div>
                    </div>
                    <div className="img_wrap">
                        <p>영수증</p>
                        <img src={Img01} alt="" />
                    </div>
                    <div className="memo">
                        <p className='title'>메모</p>
                        <p>숙소에서 테마파크까지 약 40분</p>
                    </div>
                </div>
            </div>
            <button className="button" onClick={() => { GoEdit() }}>수정하기</button>
        </div>
    );
};

export default Record;
