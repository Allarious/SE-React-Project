import React from 'react'
import { connect } from 'react-redux'
import { fetchCart } from '../../actions'

import './index.scss'

import CartItem from '../basic/cartItem'

class Cart extends React.Component{
    state = {price : 0}
    addToPrice = (add) => {
        this.setState({ price: this.state.price + add })
    }
    componentDidMount(){
        this.props.fetchCart()
    }
    render(){
        return(<div className="cart__container">
            <div className="cart__item-container">
            {this.props.cart ? Object.values(this.props.cart).map((element, index) => {
                return(<CartItem addToPrice={this.addToPrice} className="cart__item" cartId={element.id} productId={element.productId} amount={element.amount} key={index}></CartItem>)
            }) : null}
            </div>
            <div className="cart__footer">
                <div className="cart__courier">
                    هزینه ارسال :‌ رایگان
                </div>
                <div className="cart__overall-price">
                    جمع کل :‌ {this.state.price}
                </div>
                <button onClick={() => alert('سفارش شما ثبت شد.')}>ثبت سفارش</button>
            </div>
        </div>)
    }
}

const mapStateToProps = (state) => {
    return({ cart: state.cart })
}

export default connect(mapStateToProps, { fetchCart })(Cart)