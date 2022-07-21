const initState = {
		themes: ['dark', 'red', 'some'],
		chosenTheme: 'dark',
};

export const themeReducer = (state = initState, action: any): any => { // fix any
		switch (action.type) {
				case 'CHANGE-THEME': {
						return {...state, chosenTheme: action.theme}
				}
				default:
						return state;
		}
};

export const changeTheme = (theme: string): any => {
		return {type: 'CHANGE-THEME', theme} as const
}