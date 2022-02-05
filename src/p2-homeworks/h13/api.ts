import axios from "axios";


export type CommonResponse = {
    errorText: string
    info?: string
    yourBody?: {
        success?: boolean
    },
    yourQuery?: {}
}
export type Error = {
    errorText: string
    info?: string
}
const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/auth/test',
    headers: {
        "TYK_TYK": "KGB IS CALLING"
    }
})

export const hwAPI = {
    sendStatusCheckbox(checked: boolean) {
        return instance.post<CommonResponse>('/', {"success": checked})
            .then(res=>res.data)
    }
}