import React, { Component } from 'react';
import MenuHeader from './MenuHeader';
import logo from '../images/logo.svg';

class Header extends Component {
	handleScroll() {
		if (this.props.hidden) {
			return (
				<header className="header" style={{ transform: 'translateY(-10rem)', transition: 'transform .2s' }}>
					<a href="#about" style={{ cursor: 'default' }}>
						<img src={logo} className="header__logo" alt="logo" />
					</a>
					<MenuHeader hidden={this.props.hidden} />
				</header>
			);
		} else {
			return (
				<header className="header" style={{ transform: 'translateY(0)', transition: 'transform .2s' }}>
					<a href="#about" style={{ cursor: 'default' }}>
						<img src={logo} className="header__logo" alt="logo" style={{ cursor: 'pointer' }} />
					</a>
					<MenuHeader hidden={this.props.hidden} />
					<div className="header__empty">&nbsp;</div>
				</header>
			);
		}
	}
	render() {
		return <div>{this.handleScroll()}</div>;
	}
}

export default Header;
