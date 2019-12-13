import {GET_SMURFS} from './types'
const axios = require('axios')

export const getSmurfs = () => async dispatch =>{
    const res = await axios("http://localhost:3333/smurfs");
    const data = res.data
    dispatch({
        type: GET_SMURFS,
        data
    })
}