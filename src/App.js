import React, { Component } from 'react';

import IssueTracker from './components/IssueTracker/IssueTracker';
import CvHome from './components/CvHome';
import Welcome from './components/IssueTracker/Welcome';
import Login from './components/IssueTracker/Login';
import Register from './components/IssueTracker/Register';
import Profile from './components/IssueTracker/Profile';
import Issue from './components/IssueTracker/issues/Issue';
import Projects from './components/IssueTracker/Projects/Projects';
import AddIssue from './components/IssueTracker/issues/AddIssue';
import AddProject from './components/IssueTracker/Projects/AddProject';
import IssueList from './components/IssueTracker/issues/IssueList';
import Documentation from './components/IssueTracker/Documentation';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Router, Route, Switch, Redirect } from 'react-router-dom';

import history from './history';
import { connect } from 'react-redux';

class App extends Component {
	render() {
		return (
			<Router history={history}>
				<Switch>
					<Route path="/" exact component={CvHome} />
					<Route
						path={`/dg`}
						exact
						component={() => {
							window.location = 'http://digitalgarden.martijnspitter.nl';
							return null;
						}}
					/>
					<Route
						path={`/notes`}
						exact
						component={() => {
							window.location = 'http://notes.martijnspitter.nl';
							return null;
						}}
					/>
				</Switch>
				<div>
					<Switch>
						<Route path="/issuetracker/" component={IssueTracker} />
						<Route path="/issuetracker/" exact>
							<Redirect to="/issuetracker/welcome" />
						</Route>
						<Route path="/issuetracker/welcome" exact component={Welcome} />
						<Route path="/issuetracker/login" exact component={Login} />
						<Route path="/issuetracker/register" exact component={Register} />
						<Route path="/issuetracker/projects" exact component={Projects} />
						<Route path="/issuetracker/issuelist" exact component={IssueList} />
						<Route path="/issuetracker/issuelist/issue" exact component={Issue} />
						<Route exact path="/issuetracker/profile" component={Profile} />
						<Route exact path="/issuetracker/documentation" component={Documentation} />
						<Route exact path="/issuetracker/addissue" component={AddIssue} />
						<Route exact path="/issuetracker/addproject" component={AddProject} />
					</Switch>
				</div>
			</Router>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		navbar: state.navbar
	};
};

export default connect(mapStateToProps)(App);
