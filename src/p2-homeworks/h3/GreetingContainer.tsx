import React, {ChangeEvent, useState, KeyboardEvent} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3';

type GreetingContainerPropsType = {
		users: UserType[]
		addUserCallback: (name: string) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
		const [name, setName] = useState<string>('')
		const [error, setError] = useState<string>('')

		const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
				const trimmedName = e.currentTarget.value.trim()
				if (trimmedName) {
						setName(trimmedName)
						error && setError('')
				} else {
						name && setName('')
						setError('надо ввести имя')
				}
		}
		const addUser = () => {
				addUserCallback(name)
				alert(`Hello ${name}!`)
				setName('')
		}
		const onEnter = (e: KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && name && addUser()


		const totalUsers = users.length

		return (
				<Greeting
						name={name}
						setNameCallback={setNameCallback}
						addUser={addUser}
						error={error}
						totalUsers={totalUsers}
						onEnter={onEnter}
				/>
		)
}

export default GreetingContainer
