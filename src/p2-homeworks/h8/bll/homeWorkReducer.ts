import {UserType} from "../HW8";

type ActionsType =
    ReturnType<typeof sortUpAC> |
    ReturnType<typeof sortDownAC> |
    ReturnType<typeof check18AC>

export const homeWorkReducer = (state: UserType[], action: ActionsType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            if(action.payload === "up") return [...state].sort((a,b)=>a.name>=b.name?1:-1 )
            if(action.payload === "down")return [...state].sort((a,b) =>a.name<=b.name?1:-1)
            else return state
        }
        case 'check': {
            return state.filter(u => u.age >= action.payload)
        }
        default: return state
    }
}

export const sortUpAC = () => ({type: 'sort', payload: 'up'})
export const sortDownAC = () => ({type: 'sort', payload: 'down'})
export const check18AC = () => ({type: 'check', payload: 18})
