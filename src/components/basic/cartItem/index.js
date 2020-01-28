import React from 'react'
import { connect } from 'react-redux'
import { fetchProduct } from '../../../actions'

import './index.scss'

class cartItem extends React.Component {
    componentDidMount(){
        this.props.fetchProduct(this.props.productId)
    }
    render(){
        return(<div className="cart-item__container">
            {this.props.product ? 
            <>
                <div className="cart-item__name">{this.props.product.name}</div>
                <div className="cart-item__add-amount">+</div>
                <div className="cart-item__amount">{this.props.amount}</div>
                <div className="cart-item__sub-amount">-</div>
                <div className="cart-item__price">{this.props.amount * this.props.product.price}</div>
                <div className="cart-item__seller">{this.props.product.seller}</div>
            </>
            : null}
        </div>)
    }
}

const mapStateToProps = (state, ownProps) => {
    return({ product: state.products[ownProps.productId] })
}

export default connect(mapStateToProps, { fetchProduct })(cartItem)