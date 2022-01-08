import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date | "press start">("press start")
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = date === "press start"? "press start": date.toTimeString() // fix with date
    const stringDate = date === "press start"? "press start": date.toDateString()// fix with date

    return (
        <div style={{minHeight:"120px", position:"relative",}} >
            <div style={{margin:"15px",}}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                Time: {stringTime}
            </div>

            {show && (
                <div style={{margin:"15px",}}>
                   Date: {stringDate}
                </div>
            )}

            <div style={{position:"absolute", bottom:"0px"}}>
                <SuperButton onClick={start}>start</SuperButton>
                <SuperButton onClick={stop}>stop</SuperButton>
            </div>

        </div>
    )
}

export default Clock
