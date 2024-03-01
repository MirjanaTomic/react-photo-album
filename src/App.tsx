import logo from "./logo.svg";
import "./App.css";
import { JSX } from "react/jsx-runtime";
import Table from "./Table";

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Photo Album App</h1>
      </header>
      <div className="Table-section">
        <Table />
      </div>
    </div>
  );
}

export default App;
