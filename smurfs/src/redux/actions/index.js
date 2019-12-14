import {GET_SMURFS,POST_SMURF} from './types'
const axios = require('axios')

export const getSmurfs = () => async dispatch =>{
    const res = await axios("http://localhost:3333/smurfs");
    const data = res.data
    dispatch({
        type: GET_SMURFS,
        data
    })
}

export const postSmurfs = ({name,height,age}) => {
    const formattedHeight = height+ 'cm'
const smurf = {
        name,
        height:formattedHeight,
        age
    }
    return async dispatch => {
      const res = await axios.post("http://localhost:3333/smurfs", smurf);
      const data = res.data;
      console.log(res)
      dispatch({
        type: POST_SMURF,
        data
      });
    };
}