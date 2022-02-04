import React, {useState} from "react"
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox"
import {commonResponce} from "./api"

export const HW13 = () => {
    const [response, setResponse] = useState<commonResponce>()
    const [checked, setChecked] = useState<boolean>(false)


    return (
        <div>
            <SuperCheckbox
                
                checked={checked}
            />
        </div>
    )
}