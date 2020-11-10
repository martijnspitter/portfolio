import React, { useState } from 'react';

function MenuHeader({ hidden }) {
	const [ open, setOpen ] = useState(false);

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
					<div className="menu__link-div" onMouseOver={() => setOpen(true)} onClick={() => setOpen(true)}>
						<span>Apps...</span>
					</div>
					{open & !hidden ? (
						<div className="menu__dropdown" onMouseLeave={() => setOpen(false)}>
							<div className="menu__item">
								<a href="/issuetracker/" className="menu__dropdown--link">
									<span>IssueTracker</span>
								</a>
							</div>
							<div className="menu__item">
								<a href="/dg" className="menu__dropdown--link">
									<span>Digital Garden</span>
								</a>
							</div>
							<div className="menu__item">
								<a href="/notes" className="menu__dropdown--link">
									<span>Notes</span>
								</a>
							</div>
						</div>
					) : null}
				</li>
			</ul>
		</nav>
	);
}

export default MenuHeader;
