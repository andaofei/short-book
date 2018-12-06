import { takeEvery, put } from 'redux-saga/effects'
import {GET_INIT_LIST} from './actionTypes'
import {initListAction} from "./actionCreators";
import axios from 'axios'

function* getInitList() {
        const res = yield axios.get('/api/todolist')
        const action = initListAction(res.data)
        console.log(action)
        yield put(action)
}

function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga
