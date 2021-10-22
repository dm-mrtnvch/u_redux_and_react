import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";

function App() {

  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash)

  const addCash = (cash) => {
    dispatch({type: "ADD_CASH", payload: cash})
    console.log('add cash')
  }

  const getCash = (cash) => {
    dispatch({type: "GET_CASH", payload: cash})
  }

  return (
    <div className="App">
      <div>{cash}</div>
      <div>
        <button onClick={() => addCash(Number(prompt ()))}>add</button>
        <button onClick={() => getCash(Number(prompt()))}>get</button>
      </div>
    </div>
  );
}

export default App;
