import React, {useEffect, useState} from "react"
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox"
import {CommonResponse, Error, hwAPI} from "./api"
import s from "../h12/HW12.module.css";
import {useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {CircularProgress} from "@material-ui/core";

export const HW13 = () => {
    const [response, setResponse] = useState<CommonResponse>({errorText: '', info: ''})
    const [checked, setChecked] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const {selectTheme} = useSelector((state: AppStoreType) => state.theme)

    useEffect(() => {
        (async function () {
            try {
                setIsLoading(true)
                const res = await hwAPI.sendStatusCheckbox(checked)
                setResponse(res)
                setIsLoading(false)
            } catch (e: any) {//хз как типизировать e
                const error = e.response.data as Error
                if (error) {
                    setIsLoading(false)
                    setResponse(error)
                } else console.log('error:', e)
            }
        }())
    }, [checked])

    const {errorText, info} = response
    return (

        <div>
            <span className={s[selectTheme + '-text']}>
                <hr/>
                homeworks 13
            </span>
            <br/>
            <SuperCheckbox
                onChangeChecked={setChecked}
                checked={checked}
            />
            <br/>
            {isLoading
                ? <CircularProgress color="secondary"/>
                : <div className={s[selectTheme + '-text']}>
                    {errorText}
                    <br/>
                    {info}
                </div>
            }
        </div>
    )
}