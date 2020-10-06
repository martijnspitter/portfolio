import React, { Component } from 'react';
import logo from '../images/logo.svg';

export default class Footer extends Component {
	render() {
		return (
			<footer className="footer background safari_only">
				<img src={logo} className="footer__logo" alt="logo" />

				<h3 className="heading-tertiary" style={{ margin: '0 1rem', textAlign: 'center' }}>
					Thank you for your time!
				</h3>

				<div className="footer__container">
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
