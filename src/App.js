import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/Main/Main'
import Header from './components/Section/Header'
import Suggest from './components/Suggest/Suggest'
import Report from './components/Report/Report'
import Mypage from './components/Mypage/Mypage'
import Login from './components/Login/Login'
import { Join } from './components/Join/Join'
import Nav from './components/Section/Nav'

import MainLogout from './components/Main/MainLogout'
import MainLogin from './components/Main/MainLogin'
import AiSuggest from './components/Suggest/AiSuggest'
import AiResult from './components/Suggest/AiResult'
import AiResultPart from './components/Suggest/AiResultPart'
import SuggestDetail from './components/Suggest/SuggestDetail'; // 동적 페이지 컴포넌트

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/suggest' element={<Suggest />} />
                <Route path='/report' element={<Report />} />
                <Route path='/mypage' element={<Mypage />} />
                <Route path='/login' element={<Login />} />
                <Route path='/join' element={<Join />} />

                <Route path='/mainlogout' element={<MainLogout />} />
                <Route path='/mainlogin' element={<MainLogin />} />
                <Route path="/suggest/:id" element={<SuggestDetail />} />
                <Route path='/aiSuggest' element={<AiSuggest />} />
                <Route path='/aiResult' element={<AiResult />} />
                <Route path='/aiResultPart' element={<AiResultPart />} />


            </Routes>
            <Nav />
        </BrowserRouter>
    )
}

export default App