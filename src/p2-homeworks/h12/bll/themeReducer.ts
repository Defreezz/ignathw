type InitState = {
    selectTheme: string
    themes: string[]
}
type ChangeTheme = {
    type: ACTIONS_TYPES.SET_THEME
    payload: {
        selectTheme: string
    }
}
export type ActionsThemeReducer = ChangeTheme

const initState: InitState = {
    selectTheme: "light",
    themes: ["light", "dark", "red", "some"]
};

enum ACTIONS_TYPES {
    SET_THEME = 'hw12/SET_THEME',
}

export const themeReducer = (state: InitState = initState, action: ActionsThemeReducer): InitState => { // fix any
    switch (action.type) {
        case ACTIONS_TYPES.SET_THEME: {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state;
    }
};

export const changeTheme = (theme: string): ChangeTheme => {
    return {
        type: ACTIONS_TYPES.SET_THEME,
        payload: {
            selectTheme: theme
        }
    }
}; // fix any