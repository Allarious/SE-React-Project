import React from 'react'
import { connect } from "react-redux"
import { fetchProducts } from '../../actions'

import './index.scss'

class MainPage extends React.Component{
    componentDidMount(){
        this.props.fetchProducts()
    }
    render(){
        return(<div></div>)
    }
}

export default connect(null, { fetchProducts })(MainPage)