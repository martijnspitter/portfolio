import React, { Component } from 'react';

import { Modal } from 'react-bootstrap';

export default class picturePopup extends Component {
	render() {
		return (
			<Modal
				show={this.props.show}
				onHide={this.props.onHide}
				size="xl"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton>IssueTracker</Modal.Header>
				<Modal.Body>
					<img src={this.props.src} alt="popup" className="sectionNew__photo--p4" />
				</Modal.Body>
			</Modal>
		);
	}
}
