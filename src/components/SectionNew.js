import React, { Component } from 'react';

import IT1 from '../images/IT1.png';
import IT2 from '../images/IT2.png';
import IT3 from '../images/IT3.png';
import DG1 from '../images/dg1.png';
import DG2 from '../images/dg2.png';
import DG3 from '../images/dg3.png';

import PicturePopup from './PicturePopup';

export default class SectionNew extends Component {
	constructor(props) {
		super(props);
		this.state = {
			src: null,
			show: false
		};

		this.onHide = this.onHide.bind(this);
	}

	onHide() {
		this.setState({
			show: false
		});
	}

	render() {
		return (
			<div className="sectionNew background safari_only" id="new">
				<div className="sectionNew__container">
					<h1 className="heading-primary u-margin-bottom-small" style={{ display: 'flex', justifyContent: 'center' }}>
						New Sections to the website
					</h1>

					<section>
						<h3 className="heading-tertiary u-margin-bottom-small">Digital Garden</h3>
						<p className="sectionNew__text">
							The Digital Garden was created because I like the idea of a place to order my thoughts when I'm learning
							something new. The idea came to me while participating in an online React seminair. In that seminair I
							also learned about Recoil and I decided to incorporate that into this project. Recoil is a new and still
							experimental state management library developed by Facebook. It is designed for React and therefore works
							really well with React. It works similar to Redux but it requires a lot less boilerplate code. Recoil is
							designed to work with functional components as functional component design is the direction React is
							heading.
						</p>
						<p className="sectionNew__text">
							The Digital Garden website was developed using ReactJS, axios, Recoil and styling was done with Bootstrap.
							On the back-end I used an Express server, in combination with a MySQL database.
						</p>
						<p className="sectionNew__text">
							<strong>
								Features <br />
							</strong>
							The Digital Garden is a simple website that shows cards of posts on different topics I'm interested in.
							Each post has one or more tags and it's possible to filter on those tags. Each post also has a progress
							bar which represents my knowledge on that topic. Sorting can be done on the amount of progress each post
							has. Behind a closed-of section there is the possibility to add, remove or edit posts and add and assign
							tags. All the state needed is ofcourse maintained with Recoil.
						</p>
						<p className="sectionNew__text">
							For a more extensive explanation check out the Digital Garden documentation. For the source code you can
							go to my{' '}
							<a href="https://github.com/martijnspitter/digitalgarden" target="_blank" rel="noopener noreferrer">
								Github
							</a>{' '}
							page.
						</p>

						<div className="sectionNew__photo">
							<img
								src={DG1}
								alt="IssueTracker example"
								className="sectionNew__photo--p1"
								onClick={() => this.setState({ show: true, src: DG1 })}
							/>
							<img
								src={DG2}
								alt="IssueTracker example"
								className="sectionNew__photo--p2"
								onClick={() => this.setState({ show: true, src: DG2 })}
							/>
							<img
								src={DG3}
								alt="IssueTracker example"
								className="sectionNew__photo--p3"
								onClick={() => this.setState({ show: true, src: DG3 })}
							/>
						</div>
					</section>

					<section style={{ marginTop: '6rem' }}>
						<h3 className="heading-tertiary u-margin-bottom-small">IssueTracker</h3>

						<p className="sectionNew__text">
							To better showcase my ReactJS skills I developed an IssueTracker. You can find it in the navbar and I
							invite you to try it out. You might even want to use it to aid you in your own projects. When you register
							as a new user you will also be added to the project of the IssueTracker itself. If you find any bugs, if
							you want additional features or would like to give feedback, please make an issue and I will get to it as
							soon as possible.
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
							For now all users are in a single group since I don't expect a lot of traffic. Every user can make a
							project and then add or remove users to that project. Users not added to a project won't see that project.
						</p>
						<p className="sectionNew__text">
							Every user in a project can make an issue and assign a user to that issue. Issues are given a status and
							priority. Both the project creator and the issue creator can change the status, edit, reassign and delete
							the issue. The user assigned to the issue can change the status.
						</p>
						<p className="sectionNew__text">
							Every user in the project can comment on an issue. Project, issue and comment creators can edit or delete
							the comment. Users see their own name as 'you' and in a blue color. Comment creators see their comments on
							the right side and comments from other users on the left side.
						</p>
						<p className="sectionNew__text">
							For a more extensive explanation check out the IssueTracker documentation. For the source code you can go
							to my{' '}
							<a href="https://github.com/martijnspitter/issuetracker" target="_blank" rel="noopener noreferrer">
								Github
							</a>{' '}
							page.
						</p>

						<div className="sectionNew__photo">
							<img
								src={IT1}
								alt="IssueTracker example"
								className="sectionNew__photo--p1"
								onClick={() => this.setState({ show: true, src: IT1 })}
							/>
							<img
								src={IT2}
								alt="IssueTracker example"
								className="sectionNew__photo--p2"
								onClick={() => this.setState({ show: true, src: IT2 })}
							/>
							<img
								src={IT3}
								alt="IssueTracker example"
								className="sectionNew__photo--p3"
								onClick={() => this.setState({ show: true, src: IT3 })}
							/>
						</div>
					</section>
				</div>
				<PicturePopup show={this.state.show} onHide={this.onHide} src={this.state.src} />
			</div>
		);
	}
}
