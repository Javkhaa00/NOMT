import React from "react";
import "./Register.scss";
import Header from "../Header/Header"
import Footer from "../Footer/footer"

const Register = () => {
	return (
		<div className="mainDiv row">
			<Header />
			<div className="first-text row col l10 m10 offset-l1 offset-m1">
				<div className="col l6 m6">
					<h1 className="inspiration">
						Таны ирээдүйн
						өөртөө хийх
						хөрөнгө оруулалт
                    </h1>
					<h5>
						Залуу сурагчид өөрсдийн амжилтын туршлагаас хуваалцах болно.
                    </h5>
				</div>
				<h1 className="intro col l6 m6 center">
					NOMT
					ONLINE
					ACADEMY
                </h1>
			</div>
			<Footer />
		</div>
	);
};

export default Register;
