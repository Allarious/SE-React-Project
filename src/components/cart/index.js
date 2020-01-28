import React from 'react'
import { connect } from 'react-redux'
import { fetchCart } from '../../actions'

import './index.scss'

import CartItem from '../basic/cartItem'

class Cart extends React.Component{
    componentDidMount(){
        this.props.fetchCart()
    }
    render(){
        return(<div className="cart__container">
            {this.props.cart ? Object.values(this.props.cart).map((element, index) => {
                return(<CartItem className="cart__item" productId={element.productId} amount={element.amount} key={index}></CartItem>)
            }) : null}
        </div>)
    }
}

const mapStateToProps = (state) => {
    return({ cart: state.cart })
}

export default connect(mapStateToProps, { fetchCart })(Cart)