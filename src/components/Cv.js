import React, { Component } from 'react';
import headshot from '../images/headshot.jpg';

export default class cv extends Component {
	render() {
		return (
			<div className="cv wrap " id="cv">
				<div className="cv__container background">
					<div className="cv__left-side">
						<img src={headshot} alt="profilepicture" className="cv__img" />
						<h1 className="cv__name--first">Martijn</h1>
						<h1 className="cv__name--last">Spitter</h1>
					</div>

					<div className="cv__right-side background">
						<div className="cv__skills">
							<h1 className="heading-primary u-margin-bottom">CV</h1>
							Because I’m working towards a new career as a developer <br /> I have no relevant experience. But that
							does not mean I don’t have transferable skills.<br />
							<br /> I have excellent communication skills and I work well under pressure. In the past I have led teams
							up to 80 people and that has given me a strong understanding of what makes a team work well and how to be
							contributing member of such a team. A large part of my work was anticipating and solving problems and that
							is something I enjoyed doing very much.
						</div>
						<div className="cv__experience">
							<h3 className="heading-tertiary u-margin-bottom">Experience</h3>
							<div className="row">
								<div className="col-1-of-3">Restaurant Vroeg</div>
								<div className="col-2-of-3">12-2017 - 02-2020</div>
								<div className="col-1-of-3">Assistent bedrijfsleider</div>
							</div>
							<div className="row">
								<div className="col-1-of-3">Restaurant Belle</div>
								<div className="col-2-of-3">04-2016 - 11-2017</div>
								<div className="col-1-of-3">Bedrijfsleider</div>
							</div>
							<div className="row">
								<div className="col-1-of-3">Lunchroom Stegeman</div>
								<div className="col-2-of-3">10-2015 - 03-2016</div>
								<div className="col-1-of-3">Bedrijfsleider</div>
							</div>
							<div className="row">
								<div className="col-1-of-3">Restaurant Buurten</div>
								<div className="col-2-of-3">09-2013 - 09-2015</div>
								<div className="col-1-of-3">Assistent bedrijfsleider</div>
							</div>
							<div className="row">
								<div className="col-1-of-3">Restaurant 't Hoogt</div>
								<div className="col-2-of-3">02-2012 - 09-2013</div>
								<div className="col-1-of-3">Assistent bedrijfsleider</div>
							</div>
						</div>
						<div className="cv__education">
							<h3 className="heading-tertiary u-margin-bottom">Education</h3>
							<div className="row">
								<div className="col-1-of-3">Bachelor Organisatie Psychologie</div>
								<div className="col-2-of-3">09-2004 - 06-2008</div>
								<div className="col-1-of-3">Universiteit Utrecht</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
