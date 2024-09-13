import React, { useState } from 'react';
import Back from '../../assets/img/Icon/back.svg';
import Down from '../../assets/img/Icon/down.svg';
import {  Link, useNavigate } from 'react-router-dom';

const AiSuggest = () => {
    const [startyear, setStartYear] = useState("");
    const [startmonth, setStartMonth] = useState("");
    const [startday, setStartDay] = useState("");
    const [backyear, setBackYear] = useState("");
    const [backmonth, setBackMonth] = useState("");
    const [backday, setBackDay] = useState("");
    const [budget, setBudget] = useState("");
    const [people, setPeople] = useState("");

    const navigate = useNavigate();

    const years = Array.from({ length: 10 }, (_, i) => 2033 - i);
    const months = Array.from({ length: 12 }, (_, i) => i + 1);
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
     const peopleOptions = Array.from({ length: 10 }, (_, i) => i + 1);

    return (
        <div className='container'>
            <div className='suggest_wrap'>
                    <div className='subHeader'>
                         <button onClick={() => navigate(-1)}>
                            <img src={Back} alt="Back" className='back' />
                        </button>
                        <h1>AI 여행지 추천받기</h1>
                    </div>


                <div className="main">
                     <div className="budget_wrap">
                        <div className="input_wrap">
                            <input
                                type="number"
                                id="budget"
                                value={budget}
                                onChange={(e) => setBudget(e.target.value)}
                                placeholder="예산을 입력하세요"
                            />
                            <span>원</span>
                        </div>
                    </div>
                    <div className="day">
                        <div className="time_wrap">
                            <div className='start'>
                                <h3>출발</h3>
                                <div className='toggle_wrap'>
                                    <label>
                                        <select value={startyear} onChange={(e) => setStartYear(e.target.value)}>
                                            <option value="">년</option>
                                            {years.map((y) => (
                                                <option key={y} value={y}>
                                                    {y}
                                                </option>
                                            ))}
                                        </select>
                                        <img src={Down} alt="" />
                                    </label>
                                    <label>
                                        <select value={startmonth} onChange={(e) => setStartMonth(e.target.value)}>
                                            <option value="">월</option>
                                            {months.map((m) => (
                                                <option key={m} value={m}>
                                                    {m}
                                                </option>
                                            ))}
                                        </select>
                                        <img src={Down} alt="" />
                                    </label>
                                    <label>
                                        <select value={startday} onChange={(e) => setStartDay(e.target.value)}>
                                            <option value="">일</option>
                                            {days.map((d) => (
                                                <option key={d} value={d}>
                                                    {d}
                                                </option>
                                            ))}
                                        </select>
                                        <img src={Down} alt="" />
                                    </label>
                                </div>
                            </div>
                            <div className='comeback'>
                                <h3>도착</h3>
                                <div className='toggle_wrap'>
                                    <label>
                                        <select value={backyear} onChange={(e) => setBackYear(e.target.value)}>
                                            <option value="">년</option>
                                            {years.map((y) => (
                                                <option key={y} value={y}>
                                                    {y}
                                                </option>
                                            ))}
                                        </select>
                                        <img src={Down} alt="" />
                                    </label>
                                    <label>
                                        <select value={backmonth} onChange={(e) => setBackMonth(e.target.value)}>
                                            <option value="">월</option>
                                            {months.map((m) => (
                                                <option key={m} value={m}>
                                                    {m}
                                                </option>
                                            ))}
                                        </select>
                                        <img src={Down} alt="" />
                                    </label>
                                    <label>
                                        <select value={backday} onChange={(e) => setBackDay(e.target.value)}>
                                            <option value="">일</option>
                                            {days.map((d) => (
                                                <option key={d} value={d}>
                                                    {d}
                                                </option>
                                            ))}
                                        </select>
                                        <img src={Down} alt="" />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="people_wrap">
                        <div className="input_wrap">
                            <select
                                id="people"
                                value={people}
                                onChange={(e) => setPeople(e.target.value)}
                            >
                                <option value="">인원을 설정하세요</option>
                                {peopleOptions.map((p) => (
                                    <option key={p} value={p}>
                                        {p}명
                                    </option>
                                ))}
                            </select>
                            <img src={Down} alt="" />
                        </div>
                    </div>
                    <Link to="/aiResult">
                        <button className="blueBtn"> AI 추천 결과 확인하기 </button>
                    </Link>
                </div>
            </div>
      </div>
    );
};

export default AiSuggest;
