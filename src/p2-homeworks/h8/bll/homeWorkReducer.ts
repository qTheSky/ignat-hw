import {UserType} from '../HW8';





export const homeWorkReducer = (state: UserType[], action: any): UserType[] => {
		switch (action.type) {
				case 'sort': {
						return action.payload==='up'
								? [...state.sort((a, b) => a.name < b.name ? -1 : 1)]
								: [...state.sort((a, b) => a.name > b.name ? -1 : 1)]
				}
				case 'check': {
						return state.filter(human=>human.age>=18)
				}
				default:
						return state
		}
}

