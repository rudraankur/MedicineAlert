import React from 'react';
import './Header.css'

import logo from '../../assets/images/logo.jpg';


const Header = (props) => {
	return (
		<header>
			<nav className="navbar navbar-light">
  				<a className="navbar-brand" href="/">
    				<img src={logo} alt=""/>
  				</a>
				<div className="navbar-nav">
    				<h1>Medical Alert Foundation</h1>
    			</div>
			</nav>
		</header>
	)
}

export default Header;