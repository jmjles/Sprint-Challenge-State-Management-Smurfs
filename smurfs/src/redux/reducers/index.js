import { combineReducers } from "redux";
import {smurfReducer} from './smurfReducer'
export const RootReducer = combineReducers({
    smurfs: smurfReducer
})