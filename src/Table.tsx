import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

export function Table(): JSX.Element {
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
          <th>View Albums</th>
        </tr>
        {users.map((val, key) => {
          return (
            <tr className="App-table-data-row" key={key}>
              <td>{val.name}</td>
              <td>
                {val.address?.street}, {val.address?.zipcode},
                {val.address?.city}
              </td>
              <td>
                <Link to="/userAlbums">See all albums</Link>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Table;
