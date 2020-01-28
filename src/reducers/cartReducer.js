import { FETCH_CART } from '../actions/types'
import _ from 'lodash'


const INITIAL_STATE = []

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case FETCH_CART:
            return {...state, ..._.mapKeys(action.payload, "id")}
        default:
            return state
    }
}

export default cartReducer