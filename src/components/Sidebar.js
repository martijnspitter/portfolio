import React, { Component } from 'react';

class Sidebar extends Component {
	render() {
		return (
			<div className="sidebar">
				<nav className="side-nav">
					<ul className="menu">
						<li className="menu__item">
							<a href="#" className="menu__link">
								<span>About</span>
							</a>
						</li>
						<li className="menu__item">
							<a href="#" className="menu__link">
								<span>Skills</span>
							</a>
						</li>
						<li className="menu__item">
							<a href="#" className="menu__link">
								<span>Projects</span>
							</a>
						</li>
						<li className="menu__item">
							<a href="#" className="menu__link">
								<span>CV</span>
							</a>
						</li>
						<li className="menu__item">
							<a href="#" className="menu__link">
								<span>Contact</span>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		);
	}
}

export default Sidebar;
