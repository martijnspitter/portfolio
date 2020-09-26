import React, { Component } from 'react';
import headshot from '../images/headshot.jpg';

class About extends Component {
	render() {
		return (
			<div className="about  background safari_only" id="about">
				<div className="about__container">
					<h3 className="heading-tertiary u-margin-bottom-small">Who am I?</h3>
					<div className="about__flexcontainer">
						<div className="about__picture">
							<img src={headshot} alt="My profilepicture" className="about__picture--profile-picture" />
						</div>
						<div className="about__text">
							<div className="about__text--text">
								<p className="about__p">
									Hello and welcome on my website. I am Martijn Spitter, 35 years old and until recently employed in the
									hospitality branch. During the corona crisis I took the opportunity to develop myself into a front-end
									developer specialised in ReactJS. And to my surprise I found out I really enjoyed it. My love for
									problem solving, which was a big part of my work in hospitality, translates really well into coding,
									albeit in a more abstract way.
								</p>
								<br />
								<p className="about__p">
									I started with the front-end courses on Codecademy and Freecodecamp. I then took specialised courses
									on Udemy and edX in CSS, JavaScript, ReactJS en Redux and now have a solid understanding of these
									subjects. Along the way I also picked up some knowledge on MySQL and NodeJS / Express.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default About;
