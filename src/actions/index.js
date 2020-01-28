import { FETCH_PRODUCTS, FETCH_PRODUCT, ADD_TO_CART, FETCH_CART } from "./types"

import server from '../apis/server'

export const fetchProducts = () => async dispatch => {
    const response = await server.get('/products/')
    dispatch({ type: FETCH_PRODUCTS, payload: response.data })
}

export const fetchProduct = (id) => async dispatch => {
    const response = await server.get(`/products/${id}`)
    dispatch({ type : FETCH_PRODUCT, payload: response.data })
}

export const addToCart = (productId, amount) => async dispatch => {
    const response = await server.post('/cart/', {productId, amount})
    console.log(response)
    dispatch({ type: ADD_TO_CART, payload: response.data })
}

export const fetchCart = () => async dispatch => {
    const response = await server.get('/cart/')
    dispatch({ type: FETCH_CART, payload: response.data })
}