import {ASYNC_ADD_COUNT, ASYNC_DECREMENT_COUNT, decrementCreator, incrementCreator} from "../store/countReducer";
import {put, takeEvery} from "redux-saga/effects"

const  delay = (ms) => new Promise(res => setTimeout(res, ms))


function* incrementWorker() {
    yield delay(1000)
    yield put(incrementCreator())
}

function* decrementWorker() {
    yield delay(1000)
    yield put(decrementCreator())
}


export function* countWatcher(){
    yield takeEvery(ASYNC_ADD_COUNT, incrementWorker)
    yield takeEvery(ASYNC_DECREMENT_COUNT, decrementWorker)
}