import React, { Component } from 'react';
import Content from './components/Content';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

export default class App extends Component {
	state = { hidden: false };

	constructor(props) {
		super(props);

		// Bind the function to this component, so it has access to this.state
		this.handleScroll = this.handleScroll.bind(this);
	}

	componentWillMount() {
		// When this component mounts, begin listening for scroll changes
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		// If this component is unmounted, stop listening
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll(e) {
		let lastScrollTop = 0;
		const currentScrollTop = window.scrollY;
		const upOrDown = lastScrollTop - currentScrollTop;

		// Set the state of hidden depending on scroll position
		// We only change the state if it needs to be changed
		if (!this.state.hidden && currentScrollTop > lastScrollTop) {
			this.setTimeout(() = {this.setState({ hidden: true })});
		} else if (this.state.hidden) {
			this.setState({ hidden: false });
		}
		lastScrollTop = currentScrollTop;

		
		console.log(upOrDown);
		console.log(currentScrollTop);
		console.log(lastScrollTop);
	}

	render() {
		return (
			<div className="container">
				<Header hidden={this.state.hidden} />
				<div className="content-container">
					<Content />
				</div>
			</div>
		);
	}
}
