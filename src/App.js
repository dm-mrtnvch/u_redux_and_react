import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addCustomerAction, removeCustomerAction} from "./store/customerReducer";
import {fetchCustomers} from "./aysncActions/customers";
import {asyncDecrementCreator, asyncIncrementCreator, decrementCreator, incrementCreator} from "./store/countReducer";
import {fetchUsers} from "./store/userReducer";

function App() {

    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)
    const customers = useSelector(state => state.customers.customers)
    const count = useSelector(state => state.count.count)
    const users = useSelector(state => state.users.users)

    const addCash = (cash) => {
        dispatch({type: "ADD_CASH", payload: cash})
    }

    const getCash = (cash) => {
        dispatch({type: "GET_CASH", payload: cash})
    }

    const addCustomer = (name) => {
        const customer = {
            id: new Date(),
            name
        }
        dispatch(addCustomerAction(customer))
    }

    const removeCustomers = (customer) => {
        dispatch(removeCustomerAction(customer.id))
    }


    return (
        <div className="App">
            <div>{cash}</div>
            <div>
                <button onClick={() => addCash(Number(prompt()))}>add</button>
                <button onClick={() => getCash(Number(prompt()))}>get</button>
                <button onClick={() => addCustomer(prompt())}>Add customer</button>
                <button onClick={() => dispatch(fetchCustomers())}>add many customers</button>
            </div>

            <div>
                {customers.length > 0 ?
                    <>
                        {customers.map(customer => (
                            <div
                                key={customer.id}
                                onClick={() => removeCustomers(customer)}
                            >
                                {customer.name}
                            </div>
                        ))}
                    </>
                    :
                    <div>
                        no customers
                    </div>

                }
            </div>

            <div>
                <div>
                    count: {count}
                </div>
                <div>
                    <button onClick={() => dispatch(asyncIncrementCreator())}>add count</button>
                    <button onClick={() => dispatch(asyncDecrementCreator())}>decrement</button>
                    <button onClick={() => dispatch(fetchUsers())}>get users</button>
                </div>
                <div>
                    {users.length > 0 ?
                        <>
                            {users.map(u => (
                                <div key={u.id}>{u.name}</div>
                            ))}
                        </>
                        :
                        <div>no customers</div>
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
