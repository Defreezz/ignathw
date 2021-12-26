import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }


    const mappedOptions: JSX.Element[] = options
        ? options.map((option, i) => (
            <label key={name + '-' + i}>
                <input
                    type={'radio'}
                    name={name}
                    checked={option===value}
                    onChange={onChangeCallback}
                    value={option}
                />
                {option}
            </label>))
        : []

    return (
        <div>
            {mappedOptions}
        </div>
    )
}

export default SuperRadio
