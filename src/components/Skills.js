import React, { Component } from 'react';
import jslogo from '../images/js-logo.png';
import csslogo from '../images/css-logo.png';
import htmllogo from '../images/html-logo.png';
import reactlogo from '../images/react.png';

class Skills extends Component {
	render() {
		return (
			<div className="skills background" id="skills">
				<div className="skills__container">
					<h1 className="heading-primary u-margin-bottom">Front end developer</h1>

					<div className="skills__content">
						<div className="skills__div">
							<div className="skills__box">
								<img className="skills__box--icon" src={htmllogo} alt="react logo" />
								<h3 className="heading-tertiary u-margin-bottom-small">HTML 5</h3>
								<div className="skills__box--wrap">
									<p className="skills__box--text">Excellent knowledge on HTML and JSX in regards to ReactJS</p>
								</div>
							</div>

							<div className="skills__box">
								<img className="skills__box--icon" src={csslogo} alt="react logo" />
								<h3 className="heading-tertiary u-margin-bottom-small">CSS 3</h3>
								<div className="skills__box--wrap">
									<p className="skills__box--text">
										Excellent knowledge on all the modern parts of CSS (&SASS) like grid layouts, flexboxes and
										animations as well as a good eye for modern design.
									</p>
								</div>
							</div>

							<div className="skills__box">
								<img className="skills__box--icon" src={jslogo} alt="react logo" />
								<h3 className="heading-tertiary u-margin-bottom-small">JavaScript ES6</h3>
								<div className="skills__box--wrap">
									<p className="skills__box--text">
										Deep understanding of the JavaScript language including the newer parts of ES6 and above.
									</p>
								</div>
							</div>

							<div className="skills__box">
								<img className="skills__box--icon" src={reactlogo} alt="react logo" />
								<h3 className="heading-tertiary u-margin-bottom-small">ReactJS</h3>
								<div className="skills__box--wrap">
									<p className="skills__box--text">
										Specialised in ReactJS and creating reusable components. Excellent knowledge about Redux to manage
										state and Axios to make server requests.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Skills;
