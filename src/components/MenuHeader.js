import React, { Component } from 'react';

class MenuHeader extends Component {
	render() {
		return (
			<nav className="header-menu">
				<ul className="menu">
					<li className="menu__item">
						<a href="#about" className="menu__link">
							<span>About</span>
						</a>
					</li>
					<li className="menu__item">
						<a href="#skills" className="menu__link">
							<span>Skills</span>
						</a>
					</li>
					<li className="menu__item">
						<a href="#cards" className="menu__link">
							<span>Projects</span>
						</a>
					</li>
					<li className="menu__item">
						<a href="#cv" className="menu__link">
							<span>CV</span>
						</a>
					</li>
					<li className="menu__item">
						<a href="#contact" className="menu__link">
							<span>Contact</span>
						</a>
					</li>
					<li className="menu__item">
						<a href="/issuetracker/" className="menu__link">
							<span>IssueTracker</span>
						</a>
					</li>
				</ul>
			</nav>
		);
	}
}

export default MenuHeader;
