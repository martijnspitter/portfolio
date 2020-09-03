import { combineReducers } from '../../../node_modules/redux';
import authReducer from './authReducer';
import usersReducer from './usersReducer';
import projectsReducer from './projectsReducer';
import issuesReducer from './issuesReducer';
import selectedProjectReducer from './selectedProjectReducer';
import projectUsersReducer from './projectUsersReducer';
import navbarReducer from './navbarReducer';
import selectedIssueReducer from './selectedIssueReducer';
import {
	cardOneReducer,
	cardTwoReducer,
	cardThreeReducer,
	cardFourReducer,
	cardFiveReducer,
	cardSixReducer,
	selectedCardReducer
} from './cardReducers.js';

export const rootReducer = (state, action) => {
	if (action.type === 'SIGN_OUT') {
		localStorage.removeItem('persist:root');
		state = undefined;
	}

	return appReducer(state, action);
};

const appReducer = combineReducers({
	one: cardOneReducer,
	two: cardTwoReducer,
	three: cardThreeReducer,
	four: cardFourReducer,
	five: cardFiveReducer,
	six: cardSixReducer,
	card: selectedCardReducer,
	auth: authReducer,
	projects: projectsReducer,
	selectedProject: selectedProjectReducer,
	users: usersReducer,
	issues: issuesReducer,
	projectUsers: projectUsersReducer,
	navbar: navbarReducer,
	selectedIssue: selectedIssueReducer
});
