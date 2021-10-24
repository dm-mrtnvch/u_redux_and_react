import {addCustomersAction} from "../store/customerReducer";

export const fetchCustomers = () =>  (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(json => dispatch(addCustomersAction(json)))
}