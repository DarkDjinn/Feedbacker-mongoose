import axios from 'axios';
import {
	FETCH_USER,
	FETCH_SURVEYS,
	CLICKED_SURVEY_ID,
	SORT_SURVEYS_BY
} from './types';

export const fetchUser = () => async dispatch => {
	const response = await axios.get('/api/current_user');
	dispatch({
		type: FETCH_USER,
		payload: response.data
	});
};

export const handleToken = token => async dispatch => {
	const res = await axios.post('/api/stripe', token);
	dispatch({
		type: FETCH_USER,
		payload: res.data
	});
};

export const submitSurvey = (values, history) => async dispatch => {
	const res = await axios.post('/api/surveys', values);
	history.push('/surveys');

	dispatch({
		type: FETCH_USER,
		payload: res.data
	});
};

export const fetchSurveys = () => async dispatch => {
	const res = await axios.get('/api/surveys');
	dispatch({
		type: FETCH_SURVEYS,
		payload: res.data
	});
};

export const getClickedId = id => {
	return {
		type: CLICKED_SURVEY_ID,
		payload: id
	};
};

export const sortSurveysBy = sortBy => {
	return {
		type: SORT_SURVEYS_BY,
		payload: sortBy
	};
};
