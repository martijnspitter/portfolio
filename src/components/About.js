import React, { Component } from 'react';
import headshot from '../images/headshot.jpg';

class About extends Component {
	render() {
		return (
			<div className="about-wrap">
				<div className="about">
					<div className="about__container">
						<div className="about__picture">
							<img src={headshot} alt="My profilepicture" className="about__picture--profile-picture" />
						</div>
						<div className="about__text">
							<h3 className="heading-tertiary u-margin-bottom">Who am I?</h3>
							<div className="about__text--text">
								Hello and welcome on my website. I am Martijn Spitter, 35 years old and untill recently employed in
								hospitallity. During the corona crisis I took the upportonity
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default About;
