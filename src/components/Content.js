import React, { Component } from 'react';
import Cards from './Cards';
import About from './About';
import Skills from './Skills';
import Cv from './Cv';

class Content extends Component {
	render() {
		return (
			<div className="content">
				<About />
				<Skills />
				<Cards />
				<Cv />
			</div>
		);
	}
}

export default Content;
