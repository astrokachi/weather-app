import React from "react";
import "./Oval.css";

const Oval = () => {
	return (
		<div className="oval">
			<div className="clk_title">Sunrise</div>
			<div className="oval_con">
				<div className="clock">
					<div className="hourhand"></div>
					<div className="minhand"></div>
					<div className="sechand"></div>
				</div>
				<div className="ovaltime">11:24</div>
			</div>
		</div>
	);
};

export default Oval;
