import React from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../../../actions'

import './index.scss'

const ProductItem = (props) => {
    return (<div className="product-item__container">
        <div className="product-item__image"></div>
        <div className="product-item__name">{props.name}</div>
        <div className="product-item__price">{props.price}</div>
        <div className="product-item__seller">{props.seller}</div>
        <div className="product-item__add-product" onClick={() => props.addToCart(props.productId, 1)}>+</div>
    </div>)
}

export default connect(null, { addToCart })(ProductItem)