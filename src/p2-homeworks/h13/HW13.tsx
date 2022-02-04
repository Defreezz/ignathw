import React, {useEffect, useState} from "react"
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox"
import {commonResponce, hwAPI} from "./api"

export const HW13 = () => {
    const [response, setResponse] = useState<string>()
    const [checked, setChecked] = useState<boolean>(false)

    useEffect(() => {
        (async function () {
            try {
                const res = await hwAPI.toggleCheckbox(checked)
                setResponse(JSON.stringify(res.data))
            } catch (err) {
                setResponse(JSON.stringify(err))
            }
        }())
    }, [checked])


    return (
        <div>
            <SuperCheckbox
                onChangeChecked={setChecked}
                checked={checked}
            />
            <div>
                {response}
            </div>
        </div>
    )
}