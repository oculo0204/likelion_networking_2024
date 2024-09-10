import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
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

const App = () => {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    );
};

const AppContent = () => {
    // const location = useLocation();
    
    // // Header와 Nav를 숨길 경로 설정
    // const showHeader = ['/login', '/login/signup'].includes(location.pathname);
    // const hideNav = ['/login', '/login/signup', '/login/signupSuccess', '/login/splash'].includes(location.pathname);

    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/suggest' element={<Suggest />} />
                <Route path='/report' element={<Report />} />
                <Route path='/mypage' element={<Mypage />} />
                <Route path='/login/*' element={<LoginRoutes />} /> {/* Login 관련 라우트 */}
                <Route path='/join' element={<Join />} />
            </Routes>
            <Nav />
        </>
    );
};

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

