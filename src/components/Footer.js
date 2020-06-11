import React, { Component } from 'react';
import logo from '../images/logo.svg';
import linkedin from '../images/linkedin-logo.png';
import github from '../images/github-logo.png';

export default class Footer extends Component {
	render() {
		return (
			<div className="footer-wrap">
				<footer className="footer">
					<img src={logo} className="footer__logo" alt="logo" />
					<div className="footer__container">
						<div className="contact">
							<h3 className="heading-tertiary u-margin-bottom">Thank you for your time!</h3>
							<p className="contact__text">
								If you would like to contact me you can call me on <br /> +31 (0)6 48260886 or{' '}
								<a href="mailto:martijnspitter@gmail.com">email</a> me.
							</p>
							<div className="contact__logos">
								<a target="_blank" href="http://www.linkedin.com/in/martijnspitter" className="contact__logos-link">
									<img src={linkedin} alt="linkedin" className="contact__logos--linkedin" />
								</a>
								<a
									target="_blank"
									href="https://github.com/martijnspitter?tab=repositories"
									className="contact__logos-link"
								>
									<img src={github} alt="github" className="contact__logos--github" />
								</a>
							</div>
						</div>
						<div className="disclaimer">
							Copyright © Martijn Spitter. You are 100% allowed to use this website's design for personal and commercial
							use, but not to claim it as your own design. A credit to the original owner Martijn Spitter is ofcourse
							highly appreciated!
						</div>
					</div>
				</footer>
			</div>
		);
	}
}
