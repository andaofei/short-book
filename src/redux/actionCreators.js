import axios from 'axios'
import {INIT_LIST_ACTION, GET_INIT_LIST} from './actionTypes'

export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
})

export const getTodoList = () => {
    return (dispatch) => {
        axios.get('/api/todolist')
            .then(res => {
                // console.log(res)
                const action = initListAction(res.data)
                dispatch(action)
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

export const getInitList = (data) => ({
    type: GET_INIT_LIST,
    data
})
