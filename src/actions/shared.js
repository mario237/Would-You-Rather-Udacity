import { showLoading, hideLoading } from 'react-redux-loading-bar';

import { getInitialData } from '../utils/api';
import { receiveUsers } from './users';
import { receiveQuestions } from './questions';

export function handleInitialData() {
	return async (dispatch) => {
		dispatch(showLoading());
		const { users, questions } = await getInitialData();
		dispatch(receiveUsers(users));
		dispatch(receiveQuestions(questions));
		dispatch(hideLoading());
	};
}
