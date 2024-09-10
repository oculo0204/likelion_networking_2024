import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';
import Header from './components/Section/Header';
import Suggest from './components/Suggest/Suggest';
import Report from './components/Report/Report';
import Mypage from './components/Mypage/Mypage';
import Login from './components/Login/Login';
import { Join } from './components/Join/Join';
import Nav from './components/Section/Nav';
import Signup from './components/Login/Signup';
import SignupSuccess from './components/Login/Signup_success';
import Splash from './components/Login/Splash';
import MypageProfile from './components/Mypage/Profile'

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/suggest' element={<Suggest />} />
                <Route path='/report' element={<Report />} />
                <Route path='/mypage/*' element={<MypageRoutes />} /> {/* Mypage 관련 라우트 */}
                <Route path='/login/*' element={<LoginRoutes />} /> {/* Login 관련 라우트 */}
                <Route path='/join' element={<Join />} />
            </Routes>
            <Nav />
        </BrowserRouter>
    );
};

// Mypage 관련 라우트 컴포넌트
const MypageRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Mypage />} />
            <Route path='profile' element={<MypageProfile />} />
        </Routes>
    );
};

// Login 관련 라우트 컴포넌트
const LoginRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='signup' element={<Signup />} />
            <Route path='signupSuccess' element={<SignupSuccess />} />
            <Route path='splash' element={<Splash />} />
        </Routes>
    );
};

export default App;
