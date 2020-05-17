import React from 'react'
import logo from '../assets/icons/logo1.png'
import './Header.scss'

const Header = () => {

    return (
        <nav className="col l12 m12 row">
            <a href="/" className="brand-logo col l2 m2"><img alt="logo" src={logo} /></a>
            <div id="nav-mobile" className="navbar left col l7 m7 offset-l2 offset-m2 row">
                <a className="black-text titles" href="/">Сургалтууд</a>
                <a className="black-text titles" href="/">бидний тухай</a>
                <a className="black-text titles" href="/">холбоо барих</a>
                <a className="black-text titles" href="/">Төлбөр тооцоо</a>
            </div>
            <a className="right black-text" href="/">Нэвтрэх | бүртгүүлэх</a>
        </nav>
    )
}

export default Header