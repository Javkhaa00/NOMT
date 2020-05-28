import React, { useContext } from 'react'
import logo from '../assets/icons/logo2.png'
import M from 'materialize-css/dist/js/materialize'
import './Header.scss'
import DataContext from '../mainContext'
import { Link } from 'react-router-dom'

const Header = () => {
    const {userInformation} = useContext(DataContext)

    document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('.dropdown-trigger');
        var instances = M.Dropdown.init(elems, {constrainWidth: false, coverTrigger: false});
        console.log(instances);
    });

    return (
        <nav className="">
            <Link to="/" className="brand-logo"><img alt="logo" src={logo} /></Link>
            <div id="nav-mobile" className="navbar left">
                <Link className="black-text titles" to="/lesson">Сургалтууд</Link>
                <Link className="black-text titles" to="/teachers">Бидний тухай</Link>
                <p className="scrolldown black-text titles" onClick={() => window.scrollTo({top: document.body.scrollHeight, left: 100, behavior: 'smooth' })}>Холбоо барих</p>
                <Link className="black-text titles" to="/payment">Төлбөр тооцоо</Link>
            </div>
            <div>
                {
                    userInformation.name !== "" ? 
                        <Link className='right buttonTransparent dropdown-trigger btn' to='/#' data-target='dropdown1'>
                            <p className="profileText black-text">{userInformation.name}</p>
                        </Link>
                        :
                        <>
                            <Link className="buttonSignIn black-text" to="/sign-in">Нэвтрэх | </Link>
                            <Link className="buttonSignUp black-text" to="/sign-up">Бүртгүүлэх</Link>
                        </>
                }
                <ul id='dropdown1' className='dropdown-content'>
                    <li><Link className="right" to="/#">manage your profile</Link></li>
                    <li><Link className="right" to="/#">Худалдан авсан хичээл</Link></li>
                    <li><Link style={{paddingTop: '0'}} className="right" to="/#">LOG OUT</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header