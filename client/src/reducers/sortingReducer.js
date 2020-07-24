import { SORT_SURVEYS_BY } from '../actions/types';

export default function(state = 'descending', action) {
	switch (action.type) {
		case SORT_SURVEYS_BY:
			return action.payload;
		default:
			return state;
	}
}
