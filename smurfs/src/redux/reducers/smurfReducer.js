import {GET_SMURFS} from '../actions/types.js'
const initState = {
    smurfs:[]
}

export const smurfReducer = (state = initState,action) => {
    switch(action.type){
        case GET_SMURFS:
            return{
                ...state,
                smurfs:action.data
            }
        default:
            return state
    }
};