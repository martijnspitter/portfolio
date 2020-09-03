import React, { Component } from 'react';

import IT1 from '../images/IT1.png';
import IT2 from '../images/IT2.png';
import IT3 from '../images/IT3.png';

import PicturePopup from './PicturePopup';

export default class SectionNew extends Component {
	constructor(props) {
		super(props);
		this.state = {
			oneShow: false,
			twoShow: false,
			threeShow: false,
			oneSrc: IT1,
			twoSrc: IT2,
			threeSrc: IT3
		};

		this.onHide = this.onHide.bind(this);
	}

	onHide() {
		this.setState({ oneShow: false, twoShow: false, threeShow: false });
	}

	render() {
		return (
			<div className="sectionNew background" id="issuetracker">
				<div className="sectionNew__container">
					<h3 className="heading-tertiary u-margin-bottom-small" style={{ display: 'flex', justifyContent: 'center' }}>
						Issuetracker
					</h3>
					<p className="sectionNew__text">
						<strong>
							New addition to the website <br />
						</strong>
						To better showcase my ReactJS skills I developed an IssueTracker. You can find it in the navbar and I invite
						you to try it out. You might even want to use it to aid you in your own projects. When you register as a new
						user you will also be added to the project of the IssueTracker itself. If you find any bugs, if you want
						additional features or would like to give feedback, please make an issue and I will get to it as soon as
						possible.
					</p>
					<p className="sectionNew__text">
						The IssueTracker was developed using ReactJS, axios, Redux and styling was done with Bootstrap. On the
						back-end I used an Express server, with database queries being done using Sequelize, in combination with a
						MySQL database. All complete new technologies for me (although Express was chosen because it is based on
						JavaScript) and it took some doing to get familiar with both. But I'm very happy with the result!
					</p>
					<p className="sectionNew__text">
						<strong>
							Features <br />
						</strong>
						For now all users are in a single group since I dont expect a lot of traffic. Every user can make a project
						and then add or remove users to that project. Users not added to a project won't see that project. Every
						user in a project can make an issue and assign a user to that issue. Issues are given an status and
						priority. Both the project creator and the issue creator can change the status, edit, reassign and delete
						the issue. The user assigned to the project gan change the status. Every user in the project can comment on
						an issue. Project, issue and comment creators can edit or delete the comment. Users see their own name as
						'you' and in a blue color. Comment creators see their comments on the right side and comments from other
						users on the left side. For a more extensive explanation check out the IssueTracker documentation.
					</p>

					<div className="sectionNew__photo">
						<img
							src={IT1}
							alt="IssueTracker example"
							className="sectionNew__photo--p1"
							onClick={() => this.setState({ oneShow: true })}
						/>
						<img
							src={IT2}
							alt="IssueTracker example"
							className="sectionNew__photo--p2"
							onClick={() => this.setState({ twoShow: true })}
						/>
						<img
							src={IT3}
							alt="IssueTracker example"
							className="sectionNew__photo--p3"
							onClick={() => this.setState({ threeShow: true })}
						/>
					</div>
				</div>
				<PicturePopup show={this.state.oneShow} onHide={this.onHide} src={this.state.oneSrc} />
				<PicturePopup show={this.state.twoShow} onHide={this.onHide} src={this.state.twoSrc} />
				<PicturePopup show={this.state.threeShow} onHide={this.onHide} src={this.state.threeSrc} />
			</div>
		);
	}
}
