import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {

	console.log(action);
	switch(action.type) {
		case FETCH_WEATHER:
		// don't manipulate state, we just create a new array with the old data
			action.payload.data.meta=action.meta
			return [action.payload.data, ...state]; //[city, city, city] NOT [city, [city, city]]
	}

	return state;
}