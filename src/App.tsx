import React from "react";
import { useState, useEffect } from "react";

import logo from "./logo.svg";
import "./App.css";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

function Table(): JSX.Element {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(`${USERS_URL}`);
      const users = (await response.json()) as User[];
      setUsers(users);
    };

    fetchUsers();
  }, []);
  return (
    <div className="Table">
      <table>
        <tr>
          <th>Name</th>
          <th>Address</th>
        </tr>
        {users.map((val, key) => {
          return (
            <tr className="App-table-data-row" key={key}>
              <td>{val.name}</td>
              <td>
                {val.address?.street}, {val.address?.zipcode},
                {val.address?.city}
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

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
