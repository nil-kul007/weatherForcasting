import axios from 'axios';

const API_KEY = 'f9228229628828928133c110d7b4f884';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);

	//let payload.myNewData="Anil";
	console.log(request);
	return {
		type: FETCH_WEATHER,
		payload: request,
		meta: {
           cityName: city 
        }
	};
}

