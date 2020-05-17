import React from 'react'
import logo from './image/icons/logo1.png'
import './footer.scss'

const Footer = () => {


    return (
        <footer className="page-footer row">
            <div className="col l11 m11 offset-m1 offset-l1 row">
                <div className="col l4 m4">
                    <img alt="logo" src={logo} />
                </div>
                <div className="col l6 m6 offset-l2 offset-m2">
                    <h4 className="white-text center">Холбоо барих</h4>
                    <ul>
                        <li><h6>Утас: +976 99135563</h6></li>
                        <li><h6>Цахин шуудангийн хаяг: nomtonlineacademy@gmail.com</h6></li>
                        <li><h6>Хаяг: 75-32, Юнескогийн гудамж, 6-р хороо, 13-р хороолол, Баянзүрх дүүрэг, Улаанбаатар хот, Монгол Улс, 13373</h6></li>
                    </ul>
                </div>

            </div>
            <div className="footer-copyright col l12 m12">
                <h5 className="container center">
                    copyright © 2020 | Бүх эрх хуулиар хамгаалагдсан
                </h5>
            </div>
        </footer>
    )
}

export default Footer