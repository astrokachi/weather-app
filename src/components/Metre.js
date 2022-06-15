import React from "react";
import "./Metre.css";

const Metre = () => {
	return (
		<div className="met">
			{/* <div className="semicircle">
        <div className="semiback">
					<svg className="s">
						<circle cx="40" cy="70" r='37'></circle>
					</svg>
				</div>
        <div className="dot"></div>
      </div> */}

			<div
				role="progressbar"
				aria-valuenow="75"
				aria-valuemin="0"
				aria-valuemax="100"
				style={{ "--value": "10" }}
			></div>
		</div>
	);
};

export default Metre;
