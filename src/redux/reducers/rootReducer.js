import * as actionsType from '../actions/actionsType'

const initialState={
    cart:[]
}

export const productReducer = (state = initialState,action) =>{
    switch(action.type){
        case actionsType.ADD_TO_CART:
            return {
                ...initialState,
                cart: [...initialState.cart,action.payload]
            }
        case actionsType.REMOVE_FROM_CART:
            return state.filter((data,i) => i !== action.id)
        default:
            return state
    }
}