import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom';
import PreJunior from './pages/PreJunior';
import Error404 from './pages/Error404';

export const PATH = {
		PRE_JUNIOR: '/pre-junior',
		// add paths
}

function Pages() {
		return (
				<div>
						<Routes>

								<Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>
								<Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
								<Route path={'/*'} element={<Error404/>}/>

						</Routes>
				</div>
		)
}

export default Pages
