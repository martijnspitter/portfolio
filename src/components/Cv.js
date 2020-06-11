import React, { Component } from 'react';

export default class cv extends Component {
	render() {
		return (
			<div className="cv wrap">
				<div className="cv__container">
					<h1 className="cv__name--first">Martijn</h1>
					<h1 className="cv__name--last">Spitter</h1>

					<div className="cv__right-side">
						<div className="cv__skills">
							Strong communication skills. <br />Preforms excellent under pressure. Outstanding organisational skills.
							Enjoys working in teams.
						</div>
						<div className="cv__experience">
							<h3 className="heading-tertiary u-margin-bottom">Experience</h3>
							<div className="row">
								<div className="col-1-of-3">Restaurant Vroeg</div>
								<div className="col-1-of-3">12-2017 - 02-2020</div>
								<div className="col-1-of-3">Assistent bedrijfsleider</div>
							</div>
							<div className="row">
								<div className="col-1-of-3">Restaurant Belle</div>
								<div className="col-1-of-3">04-2016 - 11-2017</div>
								<div className="col-1-of-3">Bedrijfsleider</div>
							</div>
							<div className="row">
								<div className="col-1-of-3">Lunchroom Stegeman</div>
								<div className="col-1-of-3">10-2015 - 03-2016</div>
								<div className="col-1-of-3">Bedrijfsleider</div>
							</div>
							<div className="row">
								<div className="col-1-of-3">Restaurant Buurten</div>
								<div className="col-1-of-3">09-2013 - 09-2015</div>
								<div className="col-1-of-3">Assistent bedrijfsleider</div>
							</div>
							<div className="row">
								<div className="col-1-of-3">Restaurant 't Hoogt</div>
								<div className="col-1-of-3">02-2012 - 09-2013</div>
								<div className="col-1-of-3">Assistent bedrijfsleider</div>
							</div>
						</div>
						<div className="cv__education">
							<h3 className="heading-tertiary u-margin-bottom">Education</h3>
							<div className="row">
								<div className="col-1-of-3">Bachelor Organisatie Psychologie</div>
								<div className="col-1-of-3">09-2004 - 06-2008</div>
								<div className="col-1-of-3">Universiteit Utrecht</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
