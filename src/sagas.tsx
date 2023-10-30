import {call,put,takeEvery} from 'redux-saga/effects'
import { GET_USER_FETCH,GET_USER_SUCCESS } from './actions'

function userFetch() {
    return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
}

function* workUser():any {
    const users = yield call(userFetch)
    console.log(users, 'users')
    yield put({type:GET_USER_SUCCESS, users: users})
}

function* mySaga() {
    yield takeEvery(GET_USER_FETCH,workUser)
}

export default mySaga