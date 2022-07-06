import {AppStoreType} from './store';


type LoadingStateType = {
		isLoading: boolean
}
const initState = {
		isLoading: false
}
export type loadingACType = {
		type: 'TOGGLE-LOADING-STATUS'
		isLoading: boolean
}
type ActionsType = ReturnType<typeof loadingAC>

export const loadingReducer = (state:LoadingStateType = initState, action: ActionsType):LoadingStateType  => { // fix any
		switch (action.type) {
				case 'TOGGLE-LOADING-STATUS': {
						return {...state, isLoading: action.isLoading}
				}
				default:
						return state
		}
}

export const loadingAC = (isLoading: boolean): loadingACType => {
		return {type: 'TOGGLE-LOADING-STATUS', isLoading} as const
}