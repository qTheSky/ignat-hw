import React from 'react'
import {AffairType} from './HW2';
import s from './Affair.module.css';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type AffairPropsType = {
		affair: AffairType
		deleteAffairCallback: (id: number) => void
}

function Affair(props: AffairPropsType) {
		const deleteCallback = () => {
				props.deleteAffairCallback(props.affair._id)
		}

		return (
				<div className={s.affairItem}>
						<span className={s.affairName}>{props.affair.name}</span>
						<span> {props.affair.priority}</span>
						<SuperButton onClick={deleteCallback} className={s.buttonRemove}>X</SuperButton>
				</div>
		)
}

export default Affair
