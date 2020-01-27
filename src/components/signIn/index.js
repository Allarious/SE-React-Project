import React from 'react'
import { connect } from 'react-redux'

import './index.scss'

import Form from '../form'
import CustomButton from '../basic/customButton'

import history from '../../history'

const FORM_VALUES = [
    {
        title: "username",
        label: "نام کاربری"
    },
    {
        title: "password",
        label: "پسورد",
        type: "password"
    }
]

class SignIn extends React.Component{
    onSubmit = () => {
        alert("clicked")
    }
    render(){
        return(
            <div className="sign-in__container">
                <div className="sign-in__image"></div>
                <Form onSubmit={this.onSubmit} formValues={FORM_VALUES} submitText={"ورود"}/>
                <CustomButton text="ثبت‌نام" onClick={() => {history.push('/auth/SignUp')}} />
            </div>
        )
    }
}

export default connect(null, {})(SignIn);