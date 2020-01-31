import React from 'react'
import { connect } from 'react-redux'
import { fetchProduct, changeQuantity } from '../../../actions'

import './index.scss'

class cartItem extends React.Component {
    componentDidMount(){
        this.props.fetchProduct(this.props.productId).then(() => this.props.addToPrice(this.props.product.price * this.props.amount))
    }
    changeQuantity(mode){
        this.props.changeQuantity({id: this.props.cartId, amount: this.props.amount + mode, productId: this.props.productId})
        this.props.addToPrice(mode * this.props.product.price)
    }
    render(){
        return(<div className="cart-item__container">
            {this.props.product ? 
            <>
                <div className="cart-item__name">{this.props.product.name}</div>
                <div className="cart-item__add-amount cart-item__change-quantity" onClick={() => this.changeQuantity(1)}>+</div>
                <div className="cart-item__amount">{this.props.amount}</div>
                <div className="cart-item__sub-amount cart-item__change-quantity" onClick={() => this.changeQuantity(-1)}>-</div>
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

export default connect(mapStateToProps, { fetchProduct, changeQuantity })(cartItem)