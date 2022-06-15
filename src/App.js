import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import WeatherIcon from "./components/WeatherIcon";
import { TiLocationArrowOutline } from "react-icons/ti";
import { SiRainmeter } from "react-icons/si";
import { BsCloudRain } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { BiSearch } from "react-icons/bi";
import Card from "./components/Card";
import Oval from "./components/Oval";
import Metre from "./components/Metre";

function App() {
	const [longitude, setLongitude] = useState(null);
	const [latitude, setLatitude] = useState(null);
	const [country, setCountry] = useState(null);
	const [temp, setTemp] = useState("");

	const reverseGeo = () => {
		const options = {
			method: "GET",
			headers: {
				"X-RapidAPI-Host": "geocodeapi.p.rapidapi.com",
				"X-RapidAPI-Key": "33f6994177mshe5cf66fadc2fbe5p121680jsn39bde1de218b",
			},
		};

		fetch(
			`https://geocodeapi.p.rapidapi.com/GetTimezone?latitude=${latitude}&longitude=${longitude}`,
			options
		)
			.then((response) => response.json())
			// .then((response) => console.log("res", response))
			.then((response) => setCountry(response))
			.catch((err) => console.error("err", err));
	};

	const getWeatherData = () => {
		const options = {
			method: "GET",
			url: "https://community-open-weather-map.p.rapidapi.com/weather",
			params: {
				q: country,
				lat: latitude,
				lon: longitude,
				callback: "test",
				id: "2172797",
				lang: "null",
				units: "imperial",
				mode: "xml",
			},
			headers: {
				"X-RapidAPI-Key": "33f6994177mshe5cf66fadc2fbe5p121680jsn39bde1de218b",
				"X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
			},
		};

		axios
			.request(options)
			.then(function (response) {
				// console.log(response);
			})
			.catch(function (error) {
				console.error(error);
			});
	};

	const getForecast = () => {
		const options = {
			method: "GET",
			url: "https://community-open-weather-map.p.rapidapi.com/forecast/daily",
			params: {
				q: country,
				lat: latitude,
				lon: longitude,
				cnt: "10",
				units: "metric or imperial",
			},
			headers: {
				"X-RapidAPI-Key": "33f6994177mshe5cf66fadc2fbe5p121680jsn39bde1de218b",
				"X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
			},
		};

		axios
			.request(options)
			.then(function (response) {
				console.log(response.data);
			})
			.catch(function (error) {
				console.error(error);
			});
	};

	function getLocation() {
		navigator.geolocation.getCurrentPosition((res) => {
			setLongitude(res.coords.longitude);
			setLatitude(res.coords.latitude);
		}, console.log(""));
	}

	useEffect(() => {
		getLocation();
	}, []);

	useEffect(() => {
		if (country !== null) {
			// getWeatherData();
			getForecast();
		}
	}, [country]);

	useEffect(() => {
		if (latitude !== null && longitude !== null) {
			reverseGeo();
		}
	}, [latitude, longitude]);

	return (
		<div className="app">
			<div className="container">
				<div className="general">
					<WeatherIcon />

					<div className="celcius">
						<h1 className="number">{23}</h1>
						<div className="degree">
							<h4 className="o">°</h4>
							<h5 className="c">C</h5>
						</div>
					</div>

					<section className="date">
						<h3 className="date_text">17th Jun '21</h3>
					</section>

					<section className="day">
						<h4 className="day_text">Thursday</h4>
						<h4 className="day_text">|</h4>
						<h4 className="day_text">2:45 am</h4>
					</section>

					<section className="other_info">
						<div className="icon_con">
							<TiLocationArrowOutline className="wind_icon" />
							<h3>Wind</h3>
						</div>
						<h3 className="wind_value">10km/h</h3>
						<h4 className="day_text">|</h4>
						<div class="icon_con">
							<SiRainmeter className="hum_icon" />
							<h3>Hum</h3>
						</div>
						<h3 className="hum_value">54%</h3>
						<h4 className="day_text">|</h4>
						<div className="icon_con">
							<BsCloudRain className="rain_icon" />
							<h3 className="rain">Rain</h3>
						</div>
						<h3 className="rain_value">0.2%</h3>
					</section>

					<section className="cards">
						<Card />
						<Card />
						<Card />
						<Card />
					</section>
				</div>

				{/*  */}
				<div className="metre">
					<div className="topbar">
						<div className="locate">
							<GoLocation className="location_icon" />
							<header className="location_text">Delhi, India</header>
						</div>
						<div className="search">
							<BiSearch className="search_icon" />
						</div>
					</div>
					<section className="midSection">
						<Oval />
						<Oval />
					</section>

					<div className="line" />

					<section className="metres">
						<Metre />
						<Metre />
					</section>
				</div>
			</div>
		</div>
	);
}

export default App;
