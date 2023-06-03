import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import {useSelector} from "react-redux";

function App() {

    const count = useSelector((state) => state.counter.count);

    const voters = ["Antony Sistili", "Bob Smiths", "Stephanie Foo", "Kevin Ma", "Paul Go"];
  return (
    <div className="App">
      <h1>Redux made easy</h1>
        <h2>Total Votes: {count}</h2>
        {voters.map(voter => (<Counter name={voter}/>))}
    </div>
  );
}

export default App;
