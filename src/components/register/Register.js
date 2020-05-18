import React from "react";
import "./Register.scss";
import Header from "../Header/Header"

const Register = () => {
	return (
		<div className="container">
			<Header />
			<div className="text-container">
				<div className="bold-text">
					ТАНЫ ИРЭЭДҮЙН ӨӨРТӨӨ ХИЙХ ХӨРӨНГӨ ОРУУЛАЛТ
				</div>
				<div className="text">
					Таньд олон давуу тал бий болох болно
				</div>
			</div>
		</div>
	);
};

export default Register;
