import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';


type AffairsPropsType = {
    data: AffairType[]
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.length
        ? props.data.map((a: AffairType) => (
            <Affair
                key={a._id}
                affair={a}
                deleteAffairCallback={props.deleteAffairCallback}
            />
        ))
        : <div>list is empty</div>

    const onClickHandler = (filter: FilterType)=>{
        props.setFilter(filter)
    }

    return (
        <div>

            {mappedAffairs}
            <SuperButton className={s.button} onClick={() => onClickHandler('all')}>All</SuperButton>
            <SuperButton className={s.button} onClick={() => onClickHandler('high')}>High</SuperButton>
            <SuperButton className={s.button} onClick={() => onClickHandler('middle')}>Middle</SuperButton>
            <SuperButton className={s.button} onClick={() => onClickHandler('low')}>Low</SuperButton>

        </div>
    )
}

export default Affairs
