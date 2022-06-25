import {UserType} from '../HW8';


type ActionType = { type: 'sort', payload: 'up' | 'down' } | { type: 'check', payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
		switch (action.type) {
				case 'sort': {
						const newState = [...state.sort((a, b) => a.name > b.name ? 1 : -1)]
						return action.payload === 'up' ? newState : newState.reverse()
				}
				case 'check': {
						return state.filter(human => human.age >= action.payload)
				}
				default:
						return state
		}
}
