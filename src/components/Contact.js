import React, { Component } from 'react';
import linkedin from '../images/linkedin-logo.png';
import github from '../images/github-logo.png';

import axios from '../api/axios';

class Contact extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			email: '',
			company: '',
			introduction: '',
			message: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = async (e) => {
		e.preventDefault();

		const body = this.state;

		console.log(body);

		const response = await axios.post('/mail', body);

		console.log(response.data);
		if (response.data.message) {
			this.setState({
				name: '',
				email: '',
				company: '',
				introduction: '',
				message: response.data.message
			});
		}
	};

	render() {
		return (
			<div className="contact gradient background" id="contact">
				<div className="contact__text">
					<h1 className="heading-primary u-margin-bottom-small">Contact</h1>
					<p>
						If you would like to contact me you can call me on +31(0)648260886 or {' '}
						<a href="mailto:info@martijnspitter.nl">email</a> me.
					</p>

					<p>
						Or if you would like me to contact you, stay informed about updates to this site or just stay in touch?
						Leave your contact info here. &rarr;
					</p>

					<p>Of course feel free to contact me on LinkedIn or check my Github page.</p>
					<div className="contact__logos">
						<a
							target="_blank"
							href="http://www.linkedin.com/in/martijnspitter"
							rel="noopener noreferrer"
							className="contact__logos-link"
						>
							<img src={linkedin} alt="linkedin" className="contact__logos--linkedin" />
						</a>
						<a
							target="_blank"
							href="https://github.com/martijnspitter?tab=repositories"
							className="contact__logos-link"
							rel="noopener noreferrer"
						>
							<img src={github} alt="github" className="contact__logos--github" />
						</a>
					</div>
				</div>
				<form action="#" className="form" onSubmit={this.handleSubmit}>
					<h1 className="heading-primary u-margin-bottom">Please leave your contact info</h1>
					<div className="form__group">
						<input
							type="text"
							className="form__input"
							placeholder="Full name"
							id="name"
							name="name"
							value={this.state.name}
							onChange={this.handleChange}
							required
						/>
						<label htmlFor="name" className="form__label">
							Full name
						</label>
					</div>
					<div className="form__group">
						<input
							type="email"
							className="form__input"
							placeholder="Email address"
							id="email"
							name="email"
							value={this.state.email}
							onChange={this.handleChange}
							required
						/>
						<label htmlFor="email" className="form__label">
							Email address
						</label>
					</div>
					<div className="form__group">
						<input
							type="text"
							className="form__input"
							placeholder="Company"
							id="company"
							name="company"
							value={this.state.company}
							onChange={this.handleChange}
							required
						/>
						<label htmlFor="company" className="form__label">
							Company
						</label>
					</div>
					<div className="form__group">
						<input
							type="text"
							className="form__input"
							placeholder="Optional text"
							id="introduction"
							name="introduction"
							value={this.state.introduction}
							onChange={this.handleChange}
						/>
						<label htmlFor="introduction" className="form__label">
							Optional text
						</label>
					</div>
					<div style={{ marginBottom: '2rem', fontSize: '1.6rem' }}>{this.state.message}</div>
					<div className="form__group">
						<button className="cvbtn cvbtn--green" type="submit">
							Submit
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default Contact;
