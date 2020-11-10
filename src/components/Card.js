import React, { Component } from 'react';
import { selectCard } from '../redux/actions';
import { connect } from 'react-redux';
import CardPopup from './CardPopup';

class Card extends Component {
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

	popupBody(id) {
		if (id === 1) {
			return (
				<section>
					<h3 className="heading-tertiary u-margin-bottom-small">IssueTracker</h3>

					<p className="sectionNew__text">
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
						For now all users are in a single group since I don't expect a lot of traffic. Every user can make a project
						and then add or remove users to that project. Users not added to a project won't see that project.
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
						For a more extensive explanation check out the {' '}
						<a href="https://martijnspitter.nl/issuetracker/documentation" target="_blank" rel="noopener noreferrer">
							IssueTracker documentation.
						</a>
					</p>
				</section>
			);
		}
		if (id === 2) {
			return (
				<section>
					<h3 className="heading-tertiary u-margin-bottom-small">Digital Garden</h3>
					<p className="sectionNew__text">
						The Digital Garden was created because I like the idea of a place to order my thoughts when I'm learning
						something new. The idea came to me while participating in an online React seminair. In that seminair I also
						learned about Recoil and I decided to incorporate that into this project. Recoil is a new and still
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
						The Digital Garden is a simple website that shows cards of posts on different topics I'm interested in. Each
						post has one or more tags and it's possible to filter on those tags. Each post also has a progress bar which
						represents my knowledge on that topic. Sorting can be done on the amount of progress each post has. Behind a
						closed-of section there is the possibility to add, remove or edit posts and add and assign tags. All the
						state needed is ofcourse maintained with Recoil.
					</p>
					<p className="sectionNew__text">
						For a more extensive explanation check out the {' '}
						<a href="https://digitalgarden.martijnspitter.nl/documentation" target="_blank" rel="noopener noreferrer">
							Digital Garden documentation.
						</a>
					</p>
				</section>
			);
		}

		if (id === 3) {
			return (
				<section>
					<h3 className="heading-tertiary u-margin-bottom-small">Notes</h3>
					<p className="sectionNew__text">
						The Notes application is a Trello clone and was created because I wanted to learn more about GraphQL and
						dragging and dropping. GraphQL is a query language developed by Facebook. It provides a single endpoint with
						endless drilling into data structures. This provides really intelligent queries. The database is a MongoDB
						database. It is a semi non-relational database with object based data structures. It works really well with
						GraphQL. One limitation I found is that it does not provide cascade deleting.
					</p>
					<p className="sectionNew__text">
						The Notes application was developed using ReactJS, Recoil, GraphQL, react-beautiful-dnd and styling was done
						with Bootstrap. On the back-end I used an Express server, in combination with GraphQL and a MongoDB
						database.
					</p>
					<p className="sectionNew__text">
						<strong>
							Features <br />
						</strong>
						The Notes application is a simple website that shows projects. Each project has as many Notes as you'de
						like. Each note can contain items. Items can have todo lists. Notes and items are draggable. Todos can be
						completed. The idea is that when all the todos in an item are completed the item is dragged to the
						'completed note'. This way you have visual representation of the amount of work left to be done.
					</p>
					<p className="sectionNew__text">
						For aan example check out the {' '}
						<a href="http://notes.martijnspitter.nl/" target="_blank" rel="noopener noreferrer">
							Notes demo project.
						</a>
					</p>
				</section>
			);
		}
	}

	render() {
		return (
			<div className="cvcard">
				<div className="cvcard__side cvcard__side--front">
					<div className={`cvcard__picture cvcard__picture--${this.props.number}`}>&nbsp;</div>
					<h4 className="cvcard__heading">
						<span className={`cvcard__heading-span cvcard__heading-span--${this.props.number}`}>
							{this.props.title}
						</span>
					</h4>
					<div className="cvcard__details">
						<ul>
							<li>{this.props.line1}</li>
							<li>{this.props.line2}</li>
							<li>{this.props.line3}</li>
							<li>{this.props.line4}</li>
							<li>{this.props.line5}</li>
						</ul>
					</div>
				</div>
				<div className={`cvcard__side cvcard__side--back cvcard__side--back-${this.props.number}`}>
					<div className="cvcard__cta">
						<div className="cvcard__price-box">{this.props.backtext}</div>
						<button
							className="cvbtn cvbtn--white"
							onClick={() => {
								this.setState({ show: true });
							}}
						>
							MORE INFO
						</button>
					</div>
				</div>
				<CardPopup
					show={this.state.show}
					onHide={this.onHide}
					title={this.props.title}
					text={this.props.text}
					githubLink={this.props.githubLink}
					appLink={this.props.appLink}
					id={this.props.id}
					body={this.popupBody(this.props.id)}
				/>
			</div>
		);
	}
}

export default connect(null, { selectCard })(Card);
