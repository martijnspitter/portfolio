import React, { Component } from 'react';

import { connect } from 'react-redux';
import trillo from '../images/trillo.gif';
import jammming from '../images/jammming.mp4';
import natours from '../images/natours.mp4';
import videos from '../images/videos.gif';
import streams from '../images/streams.gif';
import ravanous from '../images/ravanous.gif';

class Popup extends Component {
	cardSelector = () => {
		if (this.props.card === 1) {
			return (
				<div className="popup__content">
					<div className="popup__left">
						<img src={trillo} alt={this.props.one.title} />
					</div>
					<div className="popup__right">
						<a href="#cards" className="popup__close">
							&times;
						</a>
						<h3 className="heading-tertiary u-margin-bottom-small">{this.props.one.title}</h3>
						<p className="popup__text">{this.props.one.text}</p>

						<a href={this.props.one.btnsource} target="_blank" rel="noopener noreferrer" className="cvbtn btn--green">
							SOURCE CODE
						</a>
					</div>
				</div>
			);
		}

		if (this.props.card === 2) {
			return (
				<div className="popup__content">
					<div className="popup__left">
						<video src={jammming} alt={this.props.two.title} autoPlay loop muted />
					</div>
					<div className="popup__right">
						<a href="#cards" className="popup__close">
							&times;
						</a>
						<h3 className="heading-tertiary u-margin-bottom-small">{this.props.two.title}</h3>
						<p className="popup__text">{this.props.two.text}</p>
						<a href={this.props.two.btnsource} target="_blank" rel="noopener noreferrer" className="cvbtn btn--green">
							SOURCE CODE
						</a>
					</div>
				</div>
			);
		}

		if (this.props.card === 3) {
			return (
				<div className="popup__content">
					<div className="popup__left">
						<img src={streams} alt={this.props.three.title} />
					</div>
					<div className="popup__right">
						<a href="#cards" className="popup__close">
							&times;
						</a>
						<h3 className="heading-tertiary u-margin-bottom-small">{this.props.three.title}</h3>
						<p className="popup__text">{this.props.three.text}</p>
						<a href={this.props.three.btnsource} target="_blank" rel="noopener noreferrer" className="cvbtn btn--green">
							SOURCE CODE
						</a>
					</div>
				</div>
			);
		}

		if (this.props.card === 4) {
			return (
				<div className="popup__content">
					<div className="popup__left">
						<img src={ravanous} alt={this.props.four.title} />
					</div>
					<div className="popup__right">
						<a href="#cards" className="popup__close">
							&times;
						</a>
						<h3 className="heading-tertiary u-margin-bottom-small">{this.props.four.title}</h3>
						<p className="popup__text">{this.props.four.text}</p>
						<a href={this.props.four.btnsource} target="_blank" rel="noopener noreferrer" className="cvbtn btn--green">
							SOURCE CODE
						</a>
					</div>
				</div>
			);
		}

		if (this.props.card === 5) {
			console.log(this.props.card);
			return (
				<div className="popup__content">
					<div className="popup__left">
						<video src={natours} alt={this.props.five.title} autoPlay loop muted />
					</div>
					<div className="popup__right">
						<a href="#cards" className="popup__close">
							&times;
						</a>
						<h3 className="heading-tertiary u-margin-bottom-small">{this.props.five.title}</h3>
						<p className="popup__text">{this.props.five.text}</p>
						<a href={this.props.five.btnsource} target="_blank" rel="noopener noreferrer" className="cvbtn btn--green">
							SOURCE CODE
						</a>
					</div>
				</div>
			);
		}

		if (this.props.card === 6) {
			return (
				<div className="popup__content">
					<div className="popup__left">
						<img src={videos} alt={this.props.six.title} />
					</div>
					<div className="popup__right">
						<a href="#cards" className="popup__close">
							&times;
						</a>
						<h3 className="heading-tertiary u-margin-bottom-small">{this.props.six.title}</h3>
						<p className="popup__text">{this.props.six.text}</p>
						<a href={this.props.six.btnsource} target="_blank" rel="noopener noreferrer" className="cvbtn btn--green">
							SOURCE CODE
						</a>
					</div>
				</div>
			);
		}
	};

	render() {
		return (
			<div className="popup" id="popup">
				{this.cardSelector()}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		one: state.one,
		two: state.two,
		three: state.three,
		four: state.four,
		five: state.five,
		six: state.six,
		card: state.card
	};
};

export default connect(mapStateToProps)(Popup);
