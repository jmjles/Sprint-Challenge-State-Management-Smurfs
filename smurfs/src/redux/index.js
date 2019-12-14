import {createStore, applyMiddleware} from 'redux'
import {RootReducer} from './reducers'
import Thunk from 'redux-thunk'
import Logger from 'redux-logger'
const middleWare = [Thunk,Logger]
export const store = createStore(RootReducer,applyMiddleware(...middleWare))