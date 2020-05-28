import React, { useContext } from "react";
import "./signIn.scss";
import Header from "../Header/Header"
import Check from "./check.jsx";
import DataContext from '../mainContext'
import { Link } from 'react-router-dom'

const SingIn = () => {
    const {userInformation, setUserInformation} = useContext(DataContext)
    // const { handleSubmit, register, errors } = useForm();
    const singInClicked = () => {
        const result = Check()
        if (result.check === true) {
            setUserInformation(result.userInformation)
            console.log(userInformation, result.userInformation)
            document.forms["sign-in"].submit();
            // window.history.pushState({page: 1},{page: 1}, "/", "")
        } else {
        }
    }
    return (
        <div className="register-container row ">
            <Header />
            <div className="text-container row col l10 m10 offset-l1 offset-m1">
                <div className="bold-text">
                    ТАНЫ ИРЭЭДҮЙН ӨӨРТӨӨ ХИЙХ ХӨРӨНГӨ ОРУУЛАЛТ
				</div>
                <div className="text">
                    Таньд олон давуу тал бий болох болно
				</div>
            </div>
            <div className="down_button"></div>

            <form id="sign-in" className="sign-in-container row" action="/sign-in" method="post" onSubmit={e => e.preventDefault()}>
                <div className="input">
                    <label className="head-text left align">И-МАЙЛ</label>
                    <input placeholder="ЦАХИМ ЩУУДАНГИЙН ХАЯГ" id="email" type="text" name="email" className="sign-in-input validate"></input>
                </div>

                <div className="input">
					<label className="head-text left-align">НУУЦ ДУГААР</label>
					<input placeholder="КОДОО ОРУУЛНА УУ" minLength="8" id="password" name="password" type="password" className="sign-in-input validate"></input>
				</div>

                <div className="bottom">
					<Link to='/sign-up' className="valign-wrapper sign-in">Бүртгүүлэх</Link>
					<button className="btn register" onClick={() => singInClicked()}>Нэвтрэх</button>
				</div>
            </form>
        </div>
    )
}


export default SingIn;