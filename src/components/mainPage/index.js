import React from 'react'
import { connect } from "react-redux"
import { fetchProducts } from '../../actions'

import './index.scss'

import ProductList from '../basic/productList'

class MainPage extends React.Component{
    componentDidMount(){
        this.props.fetchProducts()
    }
    render(){
        return(<div className="main-page__container">
            <div className="main-page__cover-image">Cover image goes here</div>
            <ProductList content={this.props.products ? this.props.products : null} label="توزیع‌کنندگان برتر"/>
            <ProductList content={this.props.products ? this.props.products : null} label="محصولات برتر"/>
            <ProductList content={this.props.products ? this.props.products : null} label="محصولات تازه"/>
        </div>)
    }
}

const mapStateToProps = (state) => {
    return({products: state.products})
}

export default connect(mapStateToProps, { fetchProducts })(MainPage)