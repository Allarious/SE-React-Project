import React from 'react'

import './index.scss'

import history from '../../history'

const NAVBAR_ITEMS = [
    {
        text: "صفحه اصلی",
        link: "/"
    },{
        text: "سبد خرید",
        link: "/cart"
    },{
        text: "صفحه محصولات",
        link: "/productList"
    },{
        text: "اضافه کردن محصول",
        link: "/addProduct"
    },{
        text: "ورود",
        link: "/auth/SignIn"
    },{
        text: "ثبت‌نام",
        link: "/auth/SignUp"
    }
]

class Navbar extends React.Component{
    render(){
        return(<div className="navbar__container">
            {NAVBAR_ITEMS.map((element, index) => {
                return(<div key={index} className="navbar__item" onClick={() => history.push(element.link)}>{element.text}</div>)
            })}
        </div>)
    }
}

export default Navbar