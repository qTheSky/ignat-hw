import React from 'react';
import s from './HW12.module.css';
import SuperRadio from '../h7/common/c6-SuperRadio/SuperRadio';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';
import {changeTheme} from './bll/themeReducer';


function HW12() {
		const themes = useSelector<AppStoreType, string[]>(state => state.theme.themes)
		const dispatch = useDispatch()
		const theme = useSelector<AppStoreType, string>(state => state.theme.chosenTheme)

		const onChangeTheme = (theme: string) => {
				dispatch(changeTheme(theme))
		}

		return (
				<div className={s[theme]}>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
						<div>
								<SuperRadio options={themes} value={theme} onChangeOption={onChangeTheme}/>
						</div>

						<hr/>
				</div>
		);
}

export default HW12;
