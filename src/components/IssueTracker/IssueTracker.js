import React, { Component } from 'react';

//ISSUE TRACKER
import Welcome from './Welcome';
import Login from './Login';
import Register from './Register';
import Profile from './Profile';
import Issue from './issues/Issue';
import Projects from './Projects/Projects';
import AddIssue from './issues/AddIssue';
import AddProject from './Projects/AddProject';
import IssueList from './issues/IssueList';
import Documentation from './Documentation';
import Navbar from './Navbar';

import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class IssueTracker extends Component {
	render() {
		return (
			<div className="IssueTracker">
				<Navbar
					renderAddProject={this.props.navbar.addProject}
					renderTitle={this.props.navbar.title}
					renderAddIssue={this.props.navbar.addIssue}
					renderIssueList={this.props.navbar.issueList}
					renderLogin={this.props.navbar.login}
				/>
				<div className="container mt-3" style={{ display: 'flex' }}>
					<Switch>
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
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		navbar: state.navbar.navbar
	};
};

export default connect(mapStateToProps)(IssueTracker);
