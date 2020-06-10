import React, { Component } from 'react';
import jslogo from '../images/js-logo.png';
import csslogo from '../images/css-logo.png';
import htmllogo from '../images/html-logo.png';
import reactlogo from '../images/react.png';

class Skills extends Component {
	render() {
		return (
			<div className="skills gradient">
				<div className="skills__container">
					<h1 className="u-margin-bottom-small">Front end developer</h1>
					<h1 className="u-margin-bottom-small">With minor back end experience</h1>

					<div className="skills__content">
						<div className="skills__text">
							<p className="skills__text--p">I'm proficient in HTML, CSS/SASS, JavaScript and ReactJS. </p>
						</div>

						<div className="skills__div">
							<div className="skills__box">
								<img className="skills__box--icon" src={htmllogo} alt="react logo" />
								<h3 className="heading-tertiary u-margin-bottom-small">HTML 5</h3>
								<p className="skills__box--text">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, aperiam unde illum, praesentium
									vero explicabo ipsum sit cumque!
								</p>
							</div>

							<div className="skills__box">
								<img className="skills__box--icon" src={csslogo} alt="react logo" />
								<h3 className="heading-tertiary u-margin-bottom-small">CSS 3</h3>
								<p className="skills__box--text">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, aperiam unde illum, praesentium
									vero explicabo ipsum sit cumque!
								</p>
							</div>

							<div className="skills__box">
								<img className="skills__box--icon" src={jslogo} alt="react logo" />
								<h3 className="heading-tertiary u-margin-bottom-small">JavaScript 7</h3>
								<p className="skills__box--text">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, aperiam unde illum, praesentium
									vero explicabo ipsum sit cumque!
								</p>
							</div>

							<div className="skills__box">
								<img className="skills__box--icon" src={reactlogo} alt="react logo" />
								<h3 className="heading-tertiary u-margin-bottom-small">ReactJS</h3>
								<p className="skills__box--text">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, aperiam unde illum, praesentium
									vero explicabo ipsum sit cumque!
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Skills;
