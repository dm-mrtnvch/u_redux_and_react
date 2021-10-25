
const defaultState = {
    count: 0
}

const ADD_COUNT = "ADD_COUNT"
export const ASYNC_ADD_COUNT = "ASYNC_ADD_COUNT"
const DECREMENT_COUNT = "DECREMENT_COUNT"
export const ASYNC_DECREMENT_COUNT = "ASYNC_DECREMENT_COUNT"


export const countReducer = (state = defaultState, action) => {
    switch (action.type){
        case ADD_COUNT:
            return {...state, count: state.count + 1}
        case DECREMENT_COUNT:
            return {...state, count: state.count - 1}
        default:
            return state
    }
}


export const incrementCreator = () => ({
    type: ADD_COUNT
})

export const asyncIncrementCreator = () => ({
    type: ASYNC_ADD_COUNT
})

export const decrementCreator = () => ({
    type: DECREMENT_COUNT
})

export const asyncDecrementCreator = () => ({
    type: ASYNC_DECREMENT_COUNT
})