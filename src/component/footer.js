import React from 'react'
import logo from './image/logo1.png'
import './footer.scss'

const Footer = () => {


    return (
        <footer className="page-footer">
            <div className="container row">
                <div className="col l4 m4">
                    <img alt="logo" src={logo} />
                </div>
                <div className="col l6 m6 offset-l2 offset-m2">
                    <h5 className="white-text">Links</h5>
                    <ul>
                        <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                        <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                        <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                    </ul>
                </div>

            </div>
            <div className="footer-copyright">
                <div className="container center">
                    copyright © 2020 | Бүх эрх хуулиар хамгаалагдсан
                    </div>
            </div>
        </footer>
    )
}

export default Footer