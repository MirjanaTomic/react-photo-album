import logo from "./logo.svg";
import { Link } from "react-router-dom";

export default function AppNotFoundPage(): JSX.Element {
  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Photo Album App</h1>
      </header>
      <div className="App-not-found">
        <span>404 Page Not Found</span>
        <Link to="/">Back To Home Page</Link>
      </div>
    </>
  );
}
