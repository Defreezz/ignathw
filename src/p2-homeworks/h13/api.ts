import axios from "axios";
export type commonResponce = {
    errorText: string
    info: string
    yourBody: {
        success: boolean
    },
    yourQuery: {}
}
const instance = axios.create ({
    baseURL: 'https://neko-cafe-back.herokuapp.com/auth/test',
    headers:{
        "TYK_TYK":"KGB IS COLLING"
    }
})

export const hwAPI = {
    toggleCheckbox(checked:boolean){
        return instance.post<commonResponce>('',{"success": checked})
    }
}