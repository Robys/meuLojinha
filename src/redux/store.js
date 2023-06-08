import {createStore} from 'redux'
import {productReducer} from './reducers/rootReducer'

const store = createStore(productReducer)

export default store
