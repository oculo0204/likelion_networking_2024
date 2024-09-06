import React from 'react'
import Logo from '../../assets/img/Main/logo.svg'

const Header = () => {
    return (
        <div className='Header_wrap'>
            <img src={Logo} alt="logo" />
        </div>
    )
}

export default Header