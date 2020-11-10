import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';
import Cards from './Cards';
import About from './About';
import Skills from './Skills';
import Cv from './Cv';

import Contact from './Contact';
import CustomChatBot from './CustomChatBot';

export default class CvHome extends Component {
	constructor(props) {
		super(props);

		// Bind the function to this component, so it has access to this.state
		this.handleScroll = this.handleScroll.bind(this);

		this.state = { hidden: false, lastScrollTop: 0 };
	}

	clickEventHandler(click) {
		return (window.location = click);
	}

	componentDidMount() {
		// When this component mounts, begin listening for scroll changes
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		// If this component is unmounted, stop listening
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll(e) {
		const currentScrollTop = window.scrollY;
		const upOrDown = this.state.lastScrollTop - currentScrollTop;

		// Set the state of hidden depending on scroll position
		// We only change the state if it needs to be changed
		if (upOrDown < 0) {
			setTimeout(() => {
				this.setState({ hidden: true });
			}, 200);
		} else if (upOrDown >= 0) {
			setTimeout(() => {
				this.setState({ hidden: false });
			}, 200);
		}

		this.setState({ lastScrollTop: currentScrollTop });
	}

	render() {
		return (
			<div className="cv-container">
				<Header hidden={this.state.hidden} />

				<div className="content-container">
					<About />

					<Skills />
					<Cards />
					<Cv />
					<Contact />
					<Footer />
					<CustomChatBot eventHandler={this.clickEventHandler} />
				</div>
			</div>
		);
	}
}
