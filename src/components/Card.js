import React, { Component } from 'react';
import { selectCard } from '../redux/actions';
import { connect } from 'react-redux';

class Card extends Component {
	selectedCard = () => {
		const card = this.props.id;
		return (
			<a
				href="#popup"
				className="cvbtn cvbtn--white"
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
			<div className="cvcard">
				<div className="cvcard__side cvcard__side--front">
					<div className={`cvcard__picture cvcard__picture--${this.props.number}`}>&nbsp;</div>
					<h4 className="cvcard__heading">
						<span className={`cvcard__heading-span cvcard__heading-span--${this.props.number}`}>
							{this.props.title}
						</span>
					</h4>
					<div className="cvcard__details">
						<ul>
							<li>{this.props.line1}</li>
							<li>{this.props.line2}</li>
							<li>{this.props.line3}</li>
							<li>{this.props.line4}</li>
							<li>{this.props.line5}</li>
						</ul>
					</div>
				</div>
				<div className={`cvcard__side cvcard__side--back cvcard__side--back-${this.props.number}`}>
					<div className="cvcard__cta">
						<div className="cvcard__price-box">{this.props.backtext}</div>
						{this.selectedCard()}
					</div>
				</div>
			</div>
		);
	}
}

export default connect(null, { selectCard })(Card);
