import React from 'react'
import {NavLink} from 'react-router-dom';
import {PATH} from './Pages';
import s from './Header.module.scss'

function Header() {
		return (
				<header>
						<NavLink className={s.link} to={PATH.PRE_JUNIOR}>Pre Junior</NavLink>
						<NavLink className={s.link} to={PATH.JUNIOR}>Junior</NavLink>
						<NavLink className={s.link} to={PATH.JUNIOR_PLUS}>Junior Plus</NavLink>
						<div className={s.kvadratik}/>
				</header>
		)
}

export default Header
