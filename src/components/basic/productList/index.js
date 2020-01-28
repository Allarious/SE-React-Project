import React from 'react'

import './index.scss'

import ProductItem from '../productItem'

const ProductList = (props) => {
    return(<div className="product-list__container">
        <div className="product-list__label">{props.label}</div>
        <div className="product-list__items">
            {props.content ? Object.values(props.content).map((element, index) => {
                return(<ProductItem key={index} name={element.name} price={element.price} seller={element.seller} productId={element.id}/>)
            }) : null}
        </div>
    </div>)
}

export default ProductList