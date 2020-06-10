import React, { Component } from 'react';
import Cards from './Cards';
import About from './About';
import Skills from './Skills';

class Content extends Component {
	render() {
		return (
			<div className="content">
				<About />
				<Skills />
				<Cards />
			</div>
		);
	}
}

export default Content;
