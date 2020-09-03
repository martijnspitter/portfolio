import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Modal, Button } from 'react-bootstrap';

import { deleteIssue, getIssues } from '../../../redux/actions';

class DeleteIssue extends Component {
	async handleSubmit() {
		await this.props.deleteIssue(this.props.selectedIssue.id);

		this.props.onHide();
	}

	render() {
		if (!this.props.selectedIssue.id) {
			return null;
		} else {
			return (
				<Modal
					show={this.props.show}
					onHide={this.props.onHide}
					size="lg"
					aria-labelledby="contained-modal-title-vcenter"
					centered
				>
					<Modal.Header closeButton>
						<Modal.Title id="contained-modal-title-vcenter">Delete Issue</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						Are you sure you want to delete <strong>{this.props.selectedIssue.title}</strong>
					</Modal.Body>

					<Modal.Footer>
						<Button variant="danger" onClick={() => this.handleSubmit()}>
							DELETE
						</Button>
						<Button variant="success" onClick={this.props.onHide}>
							NO
						</Button>
					</Modal.Footer>
				</Modal>
			);
		}
	}
}

const mapStateToProps = (state) => {
	return {
		selectedIssue: state.selectedIssue,
		selectedProject: state.selectedProject
	};
};

export default connect(mapStateToProps, {
	deleteIssue,
	getIssues
})(DeleteIssue);
