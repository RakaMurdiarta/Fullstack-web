import React from "react"
const InputWithLable = ({ id, label, value, type = 'text', onInputChange }) => {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} value={value} onChange={onInputChange} />

        </>


    )
}
export default InputWithLable;