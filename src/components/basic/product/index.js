import React from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../../../actions'

import './index.scss'

const Product = (props) => {
    return(
        <div className="product__container">
            <div className="product__image"></div>
            <div className="product__details">
                <div className="product__name">{props.name}</div>
                <div className="product__price">{props.price} تومان</div>
                <div className="product__seller">خرید از: {props.seller}</div>
            </div>
            <div className="product__buttons">
                <button onClick={() => { props.addToCart(props.productId, 1) }}>اضافه کردن به سبد</button>
                <button>مشاهده محصول</button>
            </div>
        </div>
    )
}

export default connect(null, { addToCart })(Product)