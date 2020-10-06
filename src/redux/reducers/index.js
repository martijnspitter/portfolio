import { combineReducers } from '../../../node_modules/redux';
import authReducer from './authReducer';
import usersReducer from './usersReducer';
import projectsReducer from './projectsReducer';
import issuesReducer from './issuesReducer';
import selectedProjectReducer from './selectedProjectReducer';
import projectUsersReducer from './projectUsersReducer';
import navbarReducer from './navbarReducer';
import selectedIssueReducer from './selectedIssueReducer';
import { cardsReducer } from './cardReducers.js';

export const rootReducer = (state, action) => {
	if (action.type === 'SIGN_OUT') {
		localStorage.removeItem('persist:root');
		state = undefined;
	}

	return appReducer(state, action);
};

const appReducer = combineReducers({
	cards: cardsReducer,
	auth: authReducer,
	projects: projectsReducer,
	selectedProject: selectedProjectReducer,
	users: usersReducer,
	issues: issuesReducer,
	projectUsers: projectUsersReducer,
	navbar: navbarReducer,
	selectedIssue: selectedIssueReducer
});
