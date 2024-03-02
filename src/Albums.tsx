import logo from "./logo.svg";

function Card(): JSX.Element {
  return (
    <>
      <div className="App-card">
        <p>Album title</p>
        <button>Click to see all images</button>
      </div>
    </>
  );
}

export default function Albums() {
  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Photo Album App</h1>
      </header>
      <div className="App-albums-container">
        <Card />
      </div>
    </>
  );
}
