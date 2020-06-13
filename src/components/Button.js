import React, { Component } from 'react';

export default class button extends Component {
	render() {
		return (
			<div>
				<a href="#popup" className="btn btn--white" title={this.props.title}>
					SOURCE
				</a>
			</div>
		);
	}
}
