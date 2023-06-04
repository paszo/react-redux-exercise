import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUser} from "./redux/ducks/user";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    const user = useSelector((state) => state.user.user);
    console.log(user);

    const count = useSelector((state) => state.counter.count);

    const voters = ["Antony Sistili", "Bob Smiths", "Stephanie Foo", "Kevin Ma", "Paul Go"];
  return (
    <div className="App">
        {user && <h1>Hello, {user.firstName} </h1>}
      <h1>Redux made easy</h1>
        <h2>Total Votes: {count}</h2>
        {voters.map(voter => (<Counter name={voter}/>))}
    </div>
  );
}

export default App;
