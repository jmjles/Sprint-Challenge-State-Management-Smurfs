import {GET_SMURFS,POST_SMURF} from '../actions/types.js'
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
            case POST_SMURF:
                return{
                    ...state,
                    smurfs:action.data
                }
        default:
            return state
    }
};