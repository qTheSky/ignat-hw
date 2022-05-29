import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from 'uuid';

export type UserType = {
    _id: string
    name: string
}

function HW3() {
    const [users, setUsers] = useState<UserType[]>([
        {_id: v1(), name: 'Test'},
    ])

    const addUserCallback = (name: string) => {
        setUsers([{_id: v1(), name: name}, ...users])
    }

    return (
        <div>
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>
            <hr/>
        </div>
    )
}

export default HW3
