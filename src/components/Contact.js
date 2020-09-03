import React, { Component } from 'react';
import linkedin from '../images/linkedin-logo.png';
import github from '../images/github-logo.png';

class Contact extends Component {
	handleChange = (event) => {};

	render() {
		return (
			<div className="wrap">
				<div className="contact gradient background">
					<div className="contact__text">
						<h1 className="heading-primary u-margin-bottom-small">Thank you for your time!</h1>
						<p>
							If you would like to contact me you can call me on <br />+31 (0)6 48260886 or {' '}
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
					<form action="#" className="form">
						<h1 className="heading-primary u-margin-bottom">Please leave your contact info</h1>
						<div className="form__group">
							<input
								type="text"
								className="form__input"
								placeholder="Full name"
								id="name"
								required
								onChange={(event) => {
									this.handleChange(event.target.value);
								}}
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
								required
								onChange={(event) => {
									this.handleChange(event.target.value);
								}}
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
								required
								onChange={(event) => {
									this.handleChange(event.target.value);
								}}
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
								onChange={(event) => {
									this.handleChange(event.target.value);
								}}
							/>
							<label htmlFor="introduction" className="form__label">
								Optional text
							</label>
						</div>
						<div className="form__group">
							<button className="btn btn--green">Submit</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default Contact;
