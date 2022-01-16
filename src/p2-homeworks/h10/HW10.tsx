import React, {Dispatch} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {ActionTypes, loadingAC} from "./bll/loadingReducer";
import {AppStoreType} from "./bll/store";
import {Backdrop, CircularProgress} from "@material-ui/core";

function HW10() {
    // useSelector, useDispatch
    const dispatch = useDispatch<Dispatch<ActionTypes>>()
    const isLoading = useSelector((state:AppStoreType) => state.loading.isLoading)
    //const loading = false

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(()=>{
            dispatch(loadingAC(false))
        },3000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {isLoading
                ? (
                    <div>
                        крутимся 3 секунды С:
                        <Backdrop open={isLoading}>
                        <CircularProgress color="inherit" />
                    </Backdrop>
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
