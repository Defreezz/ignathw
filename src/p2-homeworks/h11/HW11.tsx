import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './common/c7-SuperRange/SuperRange.module.css'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(65)

    const ChangeSuperRangeValue = (value: number) => {
        setValue1(value)
    }
    const ChangeSuperDoubleRange = (value: number[]) => {
        setValue1(value[0])
        setValue2(value[1])
    }

    return (
        <div>
            <hr/>
            homeworks 11
            {/*should work (должно работать)*/}
            <div className={s.cont}>
                <span>{value1}</span>
                <SuperRange
                    // сделать так чтоб value1 изменялось
                    value={value1}
                    max={value2}
                    onChangeRange={ChangeSuperRangeValue}
                />
                <span>{value2}</span>
            </div>

            <div className={s.cont}>
                <div>{value1}</div>
                <div className={s.range}>
                    <SuperDoubleRange
                    value={[value1, value2]}
                    onChangeRange={ChangeSuperDoubleRange}
                />
                </div>
                <div>{value2}</div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
