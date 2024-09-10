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
import Team from './components/Team/Team'

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/team' element={<Team />} />
                <Route path='/suggest' element={<Suggest />} />
                <Route path='/report' element={<Report />} />
                <Route path='/mypage' element={<Mypage />} />
                <Route path='/login' element={<Login />} />
                <Route path='/join' element={<Join />} />
            </Routes>
            <Nav />
        </BrowserRouter>
    )
}

export default App