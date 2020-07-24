import { CLICKED_SURVEY_ID } from '../actions/types';

export default function(state = '', action) {
	switch (action.type) {
		case CLICKED_SURVEY_ID:
			return action.payload;
		default:
			return state;
	}
}
