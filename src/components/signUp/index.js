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
    },
    {
        title: "repeatPassword",
        label: "تکرار پسورد",
        type: "password"
    }
]

class SignUp extends React.Component{
    onSubmit = () => {
        alert("clicked")
    }
    render(){
        return(
        <div className="sign-up__container">
            <div className="sign-up__image"></div>
            <Form onSubmit={this.onSubmit} formValues={FORM_VALUES} submitText={"ثبت‌نام"}/>
            <CustomButton text="وارد شوید" onClick={() => {history.push('/auth/SignIn')}} />
        </div>)
    }
}

export default connect(null, {})(SignUp)