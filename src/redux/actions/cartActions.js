import * as actionsType from './actionsType'

export const addToCart = (payload) =>{
    return{
        type:actionsType.ADD_TO_CART,
        payload
    }
}

export const removeFromCart = (payload) =>{
    return{
        type:actionsType.REMOVE_FROM_CART,
        payload
    }
}