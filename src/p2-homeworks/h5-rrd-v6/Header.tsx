import React from 'react'
import {NavLink} from 'react-router-dom';
import {PATH} from './Pages';

function Header() {
		return (
				<header>
						<NavLink to={PATH.PRE_JUNIOR}>Pre Junior </NavLink>
						<NavLink to={PATH.JUNIOR}>Junior </NavLink>
						<NavLink to={PATH.JUNIOR_PLUS}>Junior Plus</NavLink>
				</header>
		)
}

export default Header
