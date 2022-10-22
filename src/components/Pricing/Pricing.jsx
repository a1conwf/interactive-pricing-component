import React from "react";
import {useState} from "react";
import "./Pricing.scss";
import iconCheck from "../../assets/svg/icon-check.svg";

const Pricing = () => {
	const [sliderValue, setSliderValue] = useState(2);
	const [isDiscount, setIsDiscount] = useState(false);
	const pageViews = ["10K", "50K", "100K", "500K", "1M"];
	const prices = [8, 12, 16, 24, 36];

	//Change slider background size based on state value
	const getSliderBackgroundSize = () => {
		return {backgroundSize: `${(sliderValue * 100) / 4}% 100%`};
	};

	//Calculating discount and price including discount
	const discount = prices[sliderValue] * 12 * 0.25;
	const discountPrice = prices[sliderValue] * 12 - discount;

	return (
		<section className="pricing">
			<div className="container">
				<div className="pricing__inner">
					<div className="pricing__top">
						<div className="views">
							<p className="views__num">{pageViews[sliderValue]} pageviews</p>
							<input className="slider" type="range" name="range" min="0" max="4" value={sliderValue} onInput={(e) => setSliderValue(e.target.value)} style={getSliderBackgroundSize()} />
							<div className="views__pricing">
								<span className="views__pricing-price">&#36;{isDiscount ? discountPrice : prices[sliderValue]}.00</span>
								<span className="views__pricing-period">/ {isDiscount ? "year" : "month"}</span>
							</div>
						</div>

						<div className="billing">
							<span className="billing__monthly">Monthly Billing</span>
							<label className="switch">
								<input className="switch__input" type="checkbox" onClick={() => setIsDiscount(!isDiscount)} />
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
