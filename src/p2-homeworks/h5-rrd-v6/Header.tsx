import React from 'react'
import {NavLink} from 'react-router-dom';
import {PATH} from './Pages';
import s from './Header.module.scss'

function Header() {
		return (
				<header>
						<nav>
								<ul className={s.nav}>
										<li><NavLink to={PATH.PRE_JUNIOR}>Pre Junior</NavLink></li>
										<li><NavLink to={PATH.JUNIOR}>Junior</NavLink></li>
										<li><NavLink to={PATH.JUNIOR_PLUS}>Junior Plus</NavLink></li>
								</ul>
						</nav>
				</header>
		)
}

export default Header
