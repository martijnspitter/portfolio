import { SET_NAVBAR } from '../actions/types';

export default (
	state = { navbar: { addProject: false, addIssue: false, issueList: false, title: false, login: false } },
	action
) => {
	switch (action.type) {
		case SET_NAVBAR:
			return { ...state, navbar: action.payload };

		default:
			return state;
	}
};
