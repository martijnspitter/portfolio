import React, { Component } from 'react';

import { Modal } from 'react-bootstrap';

import IT1 from '../images/IT1.png';
import IT2 from '../images/IT2.png';
import IT3 from '../images/IT3.png';

import DG1 from '../images/dg1.png';
import DG2 from '../images/dg2.png';
import DG3 from '../images/dg3.png';

import N1 from '../images/N1.png';
import N2 from '../images/N2.png';
import N3 from '../images/N3.png';

import PicturePopup from './PicturePopup';

export default class picturePopup extends Component {
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

	imageRender() {
		if (this.props.id === 1)
			return (
				<div className="sectionNew__photo">
					<img
						src={IT1}
						alt="IssueTracker example"
						className="sectionNew__photo--p1"
						onClick={() => this.setState({ show: true, src: IT1 })}
					/>
					<img
						src={IT2}
						alt="IssueTracker example"
						className="sectionNew__photo--p2"
						onClick={() => this.setState({ show: true, src: IT2 })}
					/>
					<img
						src={IT3}
						alt="IssueTracker example"
						className="sectionNew__photo--p3"
						onClick={() => this.setState({ show: true, src: IT3 })}
					/>
				</div>
			);
		if (this.props.id === 2)
			return (
				<div className="sectionNew__photo">
					<img
						src={DG1}
						alt="IssueTracker example"
						className="sectionNew__photo--p1"
						onClick={() => this.setState({ show: true, src: DG1 })}
					/>
					<img
						src={DG2}
						alt="IssueTracker example"
						className="sectionNew__photo--p2"
						onClick={() => this.setState({ show: true, src: DG2 })}
					/>
					<img
						src={DG3}
						alt="IssueTracker example"
						className="sectionNew__photo--p3"
						onClick={() => this.setState({ show: true, src: DG3 })}
					/>
				</div>
			);
		if (this.props.id === 3)
			return (
				<div className="sectionNew__photo">
					<img
						src={N1}
						alt="IssueTracker example"
						className="sectionNew__photo--p1"
						onClick={() => this.setState({ show: true, src: N1 })}
					/>
					<img
						src={N2}
						alt="IssueTracker example"
						className="sectionNew__photo--p2"
						onClick={() => this.setState({ show: true, src: N2 })}
					/>
					<img
						src={N3}
						alt="IssueTracker example"
						className="sectionNew__photo--p3"
						onClick={() => this.setState({ show: true, src: N3 })}
					/>
				</div>
			);
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
				<Modal.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
					<div style={{ width: '95%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
						{this.props.body}
						{this.imageRender()}
						<div
							style={{
								margin: '4rem 0',
								width: '60%',
								display: 'flex',
								justifyContent: 'space-evenly',
								alignSelf: 'center'
							}}
						>
							<a
								href={this.props.appLink}
								target="_blank"
								rel="noopener noreferrer"
								className="cvbtn cvbtn--green"
								style={{ width: '19rem', textAlign: 'center' }}
							>
								VISIT APP
							</a>
							<a
								href={this.props.githubLink}
								target="_blank"
								rel="noopener noreferrer"
								className="cvbtn cvbtn--green"
								style={{ width: '19rem', textAlign: 'center' }}
							>
								SOURCE CODE
							</a>
						</div>
					</div>
				</Modal.Body>
				<PicturePopup show={this.state.show} onHide={this.onHide} src={this.state.src} />
			</Modal>
		);
	}
}
