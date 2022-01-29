import React, {Dispatch, useCallback, useEffect} from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {ActionsThemeReducer, changeTheme} from "./bll/themeReducer";
import {AppStoreType} from "../h10/bll/store";

//const themes = ['dark', 'red', 'some'];

const HW12 = React.memo(function () {

    const {themes, selectTheme} = useSelector((state: AppStoreType) => state.theme)
    const dispatch = useDispatch<Dispatch<ActionsThemeReducer>>()
    const onChangeOption = useCallback((theme: string) =>
        dispatch(changeTheme(theme)), [dispatch])

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme")
        dispatch(changeTheme(savedTheme && JSON.parse(savedTheme)))
    }, [])
    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(selectTheme)
        )
    }, [selectTheme])

    return (
        <div className={`${s[selectTheme]} ${s.block}`}>
            <hr/>
            <span className={s[selectTheme + '-text']}>
                homeworks 12
            </span>
            <SuperSelect className={selectTheme} options={themes} value={selectTheme} onChangeOption={onChangeOption}/>

            <hr/>
        </div>
    );
})

export default HW12;
