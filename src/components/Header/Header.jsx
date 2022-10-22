import React from "react";
import "./Header.scss";
import circlesPattern from "../../assets/svg/pattern-circles.svg";

const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="header__content">
					<h1 className="header__content-title">Simple, traffic-based pricing</h1>
					<p className="header__content-text">Sign-up for our 30-day trial. No credit card required. </p>
					<img className="header__content-pattern" src={circlesPattern} alt="circles-pattern" />
				</div>
			</div>
		</header>
	);
};

export default Header;
