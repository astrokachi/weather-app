import React from "react";
import "./Card.css";
import {AiOutlineCloud} from "react-icons/ai"

const Card = () => {
	return <div className="card">
    <h3 className="card_weather">24 °C</h3>
    <AiOutlineCloud className="cloudd"/>
    <h3 className="day">Fri</h3>
  </div>;
};

export default Card;
