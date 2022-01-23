
export type InitStateType = {
    isLoading:boolean
}
const initState = {
    isLoading:false
}
enum ACTIONS_TYPES {
    CHANGE_IS_LOADING = 'hw10/CHANGE_IS_LOADING'
}

export const loadingReducer = (state:InitStateType = initState, action: ActionTypes): InitStateType => { // fix any
    switch (action.type) {
        case ACTIONS_TYPES.CHANGE_IS_LOADING: {
            return {
                ...state,
                ...action.payload,
            }
        }
        default: return state
    }
}
//AC
export type ActionTypes = LoadingACType
type LoadingACType = {
    type:ACTIONS_TYPES.CHANGE_IS_LOADING
    payload:{
        isLoading:boolean
    }
}

export const loadingAC = (isLoading:boolean): LoadingACType => {
    return {
        type:ACTIONS_TYPES.CHANGE_IS_LOADING,
        payload:{
            isLoading
        },
    }
} // fix any