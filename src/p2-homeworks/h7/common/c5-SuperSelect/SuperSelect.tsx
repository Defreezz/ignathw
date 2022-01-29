import React, {ChangeEvent, DetailedHTMLProps, SelectHTMLAttributes} from 'react'
import s from './SuperSelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = React.memo((
        {
            options,
            onChange, onChangeOption,
            className,
            ...restProps
        }
    ) => {
        const mappedOptions: JSX.Element[] = options
            ? options.map((option, i) => <option
                key={i}
                value={option}
                className={s.option}
            >{option}</option>)
            : [];

        const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
            onChange && onChange(e)
            onChangeOption && onChangeOption(e.currentTarget.value)
        }
        const finalClassname = `${className ? `${s[className]} ${s.selectBlock}` : s.selectBlock}`


        return (
            <select className={finalClassname} onChange={onChangeCallback} {...restProps}>
                {mappedOptions}
            </select>
        )
    }
)

export default SuperSelect
