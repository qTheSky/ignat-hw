import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from '../h4/common/c1-SuperInputText/SuperInputText';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>)=>void
    addUser: ()=>void
    error: string
    totalUsers: number
    onEnter: (e: KeyboardEvent<HTMLInputElement>)=> void
}

const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers,onEnter}
) => {
    const inputClass =  error ? s.error : s.someClass

    return (
        <div>
            <SuperInputText onBlur={setNameCallback} onKeyDown={onEnter} value={name} onChange={setNameCallback} className={inputClass} error={error}/>
            <SuperButton onClick={addUser} disabled={!name}>add</SuperButton>
            <span>{totalUsers}</span>
            <div className={s.errorMessage}>{error}</div>
        </div>
    )
}

export default Greeting
