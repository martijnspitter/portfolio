import React, { Component } from 'react';

export default class Card extends Component {
	render() {
		return (
			<div className="card">
				<div className="card__side card__side--front">
					<div className={`card__picture card__picture--${this.props.number}`}>&nbsp;</div>
					<h4 className="card__heading">
						<span className={`card__heading-span card__heading-span--${this.props.number}`}>{this.props.title}</span>
					</h4>
					<div className="card__details">
						<ul>
							<li>{this.props.line1}</li>
							<li>{this.props.line2}</li>
							<li>{this.props.line3}</li>
							<li>{this.props.line4}</li>
							<li>{this.props.line5}</li>
						</ul>
					</div>
				</div>
				<div className={`card__side card__side--back card__side--back-${this.props.number}`}>
					<div className="card__cta">
						<div className="card__price-box">GIF of project functionallity</div>
						<a href="#popup" className="btn btn--white">
							SOURCE
						</a>
					</div>
				</div>
			</div>
		);
	}
}
