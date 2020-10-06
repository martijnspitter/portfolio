import React, { Component } from 'react';

import { Modal } from 'react-bootstrap';

import trillo from '../images/trillo.gif';
import jammming from '../images/jammming.mp4';
import natours from '../images/natours.mp4';
import videos from '../images/videos.gif';
import streams from '../images/streams.gif';
import ravanous from '../images/ravanous.gif';

export default class picturePopup extends Component {
	gifRender() {
		if (this.props.id === 1) return <img src={trillo} alt={this.props.title} />;
		if (this.props.id === 2) return <video src={jammming} alt={this.props.title} autoPlay loop muted />;
		if (this.props.id === 3) return <img src={streams} alt={this.props.title} />;
		if (this.props.id === 4) return <img src={ravanous} alt={this.props.title} />;
		if (this.props.id === 5) return <video src={natours} alt={this.props.title} autoPlay loop muted />;
		if (this.props.id === 6) return <img src={videos} alt={this.props.title} />;
	}
	render() {
		return (
			<Modal
				show={this.props.show}
				onHide={this.props.onHide}
				size="xl"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton>
					<h3 className="heading-tertiary u-margin-bottom-small">{this.props.title}</h3>
				</Modal.Header>
				<Modal.Body style={{ display: 'flex', justifyContent: 'space-evenly' }}>
					<div className="popup__left">{this.gifRender()}</div>
					<div className="popup__right">
						<p className="popup__text">{this.props.text}</p>

						<a
							href={this.props.btnsource}
							target="_blank"
							rel="noopener noreferrer"
							className="cvbtn btn--green"
							style={{ width: '19rem' }}
						>
							{' '}
							SOURCE CODE
						</a>
					</div>
				</Modal.Body>
			</Modal>
		);
	}
}
