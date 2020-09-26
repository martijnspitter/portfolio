import React, { Component } from 'react';
import logo from '../images/logo.svg';
import linkedin from '../images/linkedin-logo.png';
import github from '../images/github-logo.png';

export default class Footer extends Component {
	render() {
		return (
			<footer className="footer background safari_only" id="contact">
				<img src={logo} className="footer__logo" alt="logo" />

				<h3 className="heading-tertiary" style={{ margin: '0 1rem', textAlign: 'center' }}>
					Thank you for your time!
				</h3>

				<div className="footer__container">
					<div className="contact">
						<div className="contact__text">Contact information:</div>
						<div style={{ display: 'flex', alignItems: 'center' }}>
							<svg
								width="2rem"
								height="2rem"
								viewBox="0 0 16 16"
								className="bi bi-telephone-fill"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"
								/>
							</svg>
							+31 (0)6 48260886
						</div>

						<div>
							<svg
								width="2rem"
								height="2rem"
								viewBox="0 0 16 16"
								className="bi bi-envelope"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"
								/>
							</svg>
							<a href="mailto:info@martijnspitter.nl"> info@martijnspitter.nl</a>
						</div>

						<div className="contact__logos">
							<a
								target="_blank"
								href="http://www.linkedin.com/in/martijnspitter"
								rel="noopener noreferrer"
								className="contact__logos-link"
							>
								<img src={linkedin} alt="linkedin" className="contact__logos--linkedin" />
							</a>
							<a
								target="_blank"
								href="https://github.com/martijnspitter?tab=repositories"
								className="contact__logos-link"
								rel="noopener noreferrer"
							>
								<img src={github} alt="github" className="contact__logos--github" />
							</a>
						</div>
					</div>
					<div className="disclaimer">
						Copyright © Martijn Spitter. You are 100% allowed to use this website's design for personal and commercial
						use, but not to claim it as your own design. A credit to the original owner Martijn Spitter is of course
						highly appreciated!
					</div>
				</div>
			</footer>
		);
	}
}
