import React from "react";
import {useState, useEffect} from "react";
import "./Pricing.scss";
import iconCheck from "../../assets/svg/icon-check.svg";

const Pricing = () => {
	const [pageViews, setPageViews] = useState("100K");
	const [price, setPrice] = useState(16);
	const [period, setPeriod] = useState("month");
	const [value, setValue] = useState(2);
	const [checked, setIsChecked] = useState(false);

	//Change slider background size based on state value
	const getSliderBackgroundSize = () => {
		return {backgroundSize: `${(value * 100) / 4}% 100%`};
	};

	//Update value state based on slider value
	const handleValueChange = (e) => {
		setValue(e.target.value);
	};

	const handleDataChange = () => {
		//Depending on slider value, change page views
		switch (value) {
			case "0":
				setPageViews("10K");
				break;

			case "1":
				setPageViews("50K");
				break;

			case "2":
				setPageViews("100K");
				break;

			case "3":
				setPageViews("500K");
				break;

			case "4":
				setPageViews("1M");
				break;
			default:
				setPageViews("100K");
		}

		//If toggle is checked, set default period to year and display prices per year with 25% discount
		if (checked) {
			setPeriod("year");

			switch (value) {
				case "0":
					setPrice(69);
					break;

				case "1":
					setPrice(108);
					break;

				case "2":
					setPrice(144);
					break;

				case "3":
					setPrice(216);
					break;

				case "4":
					setPrice(324);
					break;
				default:
					setPrice(144);
			}
		} else {
			//If toggle is not checked, set default period to month and display prices per months
			setPeriod("month");

			switch (value) {
				case "0":
					setPrice(8);
					break;

				case "1":
					setPrice(12);
					break;

				case "2":
					setPrice(16);
					break;

				case "3":
					setPrice(24);
					break;

				case "4":
					setPrice(36);
					break;
				default:
					setPrice(16);
			}
		}
	};

	useEffect(() => {
		handleDataChange();
	}, [value, checked]);

	return (
		<section className="pricing">
			<div className="container">
				<div className="pricing__inner">
					<div className="pricing__top">
						<div className="views">
							<p className="views__num">{pageViews} pageviews</p>
							<input
								className="slider"
								type="range"
								name="range"
								min="0"
								max="4"
								value={value}
								onChange={(e) => {
									handleValueChange(e);
								}}
								style={getSliderBackgroundSize()}
							/>
							<div className="views__pricing">
								<span className="views__pricing-price">&#36;{price} </span>
								<span className="views__pricing-period">/ {period}</span>
							</div>
						</div>

						<div className="billing">
							<span className="billing__monthly">Monthly Billing</span>
							<label className="switch">
								<input className="switch__input" type="checkbox" onClick={() => setIsChecked(!checked)} />
								<span className="switch__slider"></span>
							</label>
							<span className="billing__yearly">Yearly Billing</span>
							<span className="billing__discount mob">-25%</span>
							<span className="billing__discount desk">25% discount</span>
						</div>
					</div>

					<div className="pricing__bottom">
						<div className="pricing__bottom-features">
							<ul>
								<li>
									<img src={iconCheck} alt="icon-check" />
									Unlimited websites
								</li>
								<li>
									<img src={iconCheck} alt="icon-check" />
									100% data ownership
								</li>
								<li>
									<img src={iconCheck} alt="icon-check" />
									Email reports
								</li>
							</ul>
						</div>
						<button className="cta__btn">Start my trial</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Pricing;
