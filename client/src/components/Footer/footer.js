import React from 'react'
import logo from '../assets/icons/logo2.png'
import './footer.scss'

const Footer = () => {


    return (
        <footer className="page-footer row" id="footer">
            <div className="col l12 m12 row centerBigFooter"  style={{ marginBottom: '0' }}>
                <div className="big-footer">
                    <img className="logo" alt="logo" src={logo} />
                    <div className="col l6 m6 offset-l1 offset-m1">
                        <h4 className="center contact">ХОЛБОО БАРИХ</h4>
                        <ul className="information">
                            <li><h6>Утас: +976 99135563</h6></li>
                            <li><h6>Цахин шуудангийн хаяг: nomtonlineacademy@gmail.com</h6></li>
                            <li><h6>Хаяг: 75-32, Юнескогийн гудамж, 6-р хороо, 13-р хороолол,</h6></li>
                            <li><h6 style={{ marginLeft: '55px' }}>Баянзүрх дүүрэг, Улаанбаатар хот, Монгол Улс, 13373</h6></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="line col l12 m12"> </div>
            <div className="footer-copyright col l12 m12">
                <h5 className="container center black-text">
                    COPYRIGHT © 2020 | БҮХ ЭРХ ХУУЛИАР ХАМГААЛАГДСАН
                </h5>
            </div>
        </footer>
    )
}

export default Footer