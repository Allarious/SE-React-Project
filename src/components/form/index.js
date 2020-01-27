import React from 'react'
import { Field, reduxForm } from 'redux-form'

import './index.scss'

import CustomInput from '../basic/customInput'
import CustomButton from '../basic/customButton'
import WhiteSpace from '../basic/whiteSpace'
import CustomRadio from '../basic/customRadio'

class Form extends React.Component{
    setComponent = type => {
        switch(type){
            case "radioButton":
                return CustomRadio
            default:
                return CustomInput
        }
    }
    render(){
        return(
            <form className="form__container" onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
                {this.props.title ? <div className="form__title">{this.props.title}</div> : null}
                <div className="form__input-container">
                    {this.props.formValues.map((element, index) => {
                        return(
                            <Field 
                            name={element.title}
                            placeholder={element.placeholder}
                            component={this.setComponent(element.inputType)}
                            label={element.label}
                            key={index}
                            content={element.content}
                            type={element.type}
                            />
                        )
                    })}
                </div>
                <WhiteSpace space="1" />
                {this.props.submitText ? <CustomButton text={this.props.submitText} /> : null}
                {this.props.children}
            </form>
        )
    }
}

const validate = formValues => {
    const errors = {}
    if(!formValues.username){
        errors.username = "لطفا نام کاربری خود را وارد نمایید"
    }
    if(!formValues.password){
        errors.password = "لطفا پسورد خود را وارد نمایید"
    }
    if(formValues.password !== formValues.repeatPassword){
        errors.repeatPassword = "پسوردها یکسان نیستند"
    }
    if(!formValues.repeatPassword){
        errors.repeatPassword = "لطفا تکرار پسورد خود را وارد نمایید"
    }
    return errors
}

export default reduxForm({
    form: "basicform",
    validate: validate
})(Form);