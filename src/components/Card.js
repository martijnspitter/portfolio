import React, { Component } from 'react';
import { selectCard } from '../actions';
import { connect } from 'react-redux';

class Card extends Component {
	selectedCard = () => {
		const card = this.props.id;
		return (
			<a
				href="#popup"
				className="btn btn--white"
				onClick={() => {
					this.props.selectCard(card);
				}}
			>
				DEMO
			</a>
		);
	};
	render() {
		return (
			<div className="empty">
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
							<div className="card__price-box">{this.props.backtext}</div>
							{this.selectedCard()}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(null, { selectCard })(Card);
