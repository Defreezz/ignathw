import React from 'react'
import style from './Error404.module.css'

function Error404() {
    return (

        <div className={style.wrapper}>
            <div className={style.text}>
                <h1>404</h1></div>
            <div className={style.text}>Page not found!</div>
            <div className={style.Err404}></div>

            <div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        </div>
    )
}

export default Error404
