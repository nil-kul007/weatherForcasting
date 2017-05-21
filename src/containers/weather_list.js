import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';


class WeatherList extends Component {
	renderWeather(cityData) {
		const name = cityData.city.name;
		const searchName = cityData.meta.cityName;
		const temps = cityData.list.map(weather => weather.main.temp);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		console.log(pressures);
    	const humidities = cityData.list.map(weather => weather.main.humidity);
    	console.log(humidities);
		const {lon, lat} = cityData.city.coord;
		console.log({lon, lat})
		return (
			<tr key={name}>
				<td><p>Search : {searchName}</p>Search Result : {name}</td>
				<td><Chart data={temps} color="red" units="C" /></td>
				<td><Chart data={pressures} color="green" units="hPa" /></td>
        		<td><Chart data={humidities} color="blue" units="%" /></td>
			</tr>
		);
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
					<th>City</th>
					<th>Temperature (K)</th>
					<th>Pressure (hPa)</th>
					<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
				 {this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>


		);
	}
};

function mapStateToProps({weather}) {
	return {weather};
}

export default connect(mapStateToProps)(WeatherList);