import { FETCH_PRODUCTS } from "./types"

import server from '../apis/server'

export const fetchProducts = () => async dispatch => {
    const response = await server.get('/products')
    console.log(response)
}