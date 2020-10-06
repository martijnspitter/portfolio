import React, { Component } from 'react';
import { selectCard } from '../redux/actions';
import { connect } from 'react-redux';
import CardPopup from './CardPopup';

class Card extends Component {
	constructor(props) {
		super(props);
		this.state = {
			src: null,
			show: false
		};

		this.onHide = this.onHide.bind(this);
	}

	onHide() {
		this.setState({
			show: false
		});
	}

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
						<button
							className="cvbtn cvbtn--white"
							onClick={() => {
								this.setState({ show: true });
							}}
						>
							DEMO
						</button>
					</div>
				</div>
				<CardPopup
					show={this.state.show}
					onHide={this.onHide}
					title={this.props.title}
					text={this.props.text}
					btnsourc={this.props.btnsourc}
					id={this.props.id}
				/>
			</div>
		);
	}
}

export default connect(null, { selectCard })(Card);
