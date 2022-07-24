import axios from "axios";
import * as types from "./actionTypes";


const getTasks =() => dispatch => {
    dispatch({type: types.GET_TASKS_REQUEST})
    return axios.get('http://localhost:8080/tasks').then(res => {
        dispatch({type: types.GET_TASKS_SUCCESS, payload: res.data}) 
        
    })
    .catch(err => dispatch({type: types.GET_TASKS_FAILURE, payload: err}))
};
export {getTasks}