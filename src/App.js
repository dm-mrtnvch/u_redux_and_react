import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addCustomerAction, removeCustomerAction} from "./store/customerReducer";
import {fetchCustomers} from "./aysncActions/customers";

function App() {

    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)
    const customers = useSelector(state => state.customers.customers)

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
        </div>
    );
}

export default App;
