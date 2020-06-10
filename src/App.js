import React, { Component } from 'react';
import Content from './components/Content';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

export default class App extends Component {
	state = { hidden: false, lastScrollTop: 0 };

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
			<div className="container">
				<Header hidden={this.state.hidden} />
				<div className="content-container">
					<Content />
				</div>
			</div>
		);
	}
}
