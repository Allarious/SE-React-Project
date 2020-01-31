import React from 'react'

import "./index.scss"

const CustomInput = props => {
    return (
        <div className="custom-button__container">
            <div className="custom-button__button-container">
                {props.label ? <label className="custom-input__label">{props.label}</label> : null}
                <input className="custom-input__inputs" {...props.input} placeholder={props.placeholder ? props.placeholder : null} type={props.type ? props.type : "text"} ></input>
            </div>
            {props.meta ? renderError(props.meta) : null}
        </div>
    )
}

const renderError = ({touched, error}) => {
    if(touched && error){
        return <div className="custom-input__error">{error}</div>
    }
}

export default CustomInput