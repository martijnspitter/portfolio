import React, { Component } from 'react';
import MenuHeader from './MenuHeader';
import logo from '../images/logo.svg';

class Header extends Component {
	constructor(props) {
		super(props);
	}

	handleScroll() {
		if (this.props.hidden) {
			return (
				<header className="header" style={{ transform: 'translateY(-10rem)', transition: 'transform .2s' }}>
					<img src={logo} className="header__logo" alt="logo" />

					<MenuHeader />
				</header>
			);
		} else {
			return (
				<header className="header" style={{ transform: 'translateY(0)', transition: 'transform .2s' }}>
					<img src={logo} className="header__logo" alt="logo" />

					<MenuHeader />
				</header>
			);
		}
	}
	render() {
		return <div>{this.handleScroll()}</div>;
	}
}

export default Header;

//Add login button. square rounded. One time passwords for login!
// menu button square rounded. grow down.
