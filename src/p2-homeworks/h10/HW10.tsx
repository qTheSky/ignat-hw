import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from './bll/store';
import {loadingAC} from './bll/loadingReducer';
import preloader from '../../assets/images/spinner.svg'

function HW10() {
		let loading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
		const dispatch = useDispatch()

		const setLoading = () => {
				dispatch(loadingAC(!loading));
				setTimeout(() => {
						dispatch(loadingAC(loading))
				}, 1621)
		};

		return (
				<div>
						{loading
								? <div><img src={preloader} alt="spinner" style={{width: '40px'}}/></div>
								: <div>
										<SuperButton onClick={setLoading}>set loading...</SuperButton>
								</div>
						}
						<hr/>
				</div>
		)
}

export default HW10
