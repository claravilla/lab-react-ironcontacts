import "./App.css";
import contactsData from "./contacts.json";
import { useState } from "react";

function App() {
  const [contacts, setContact] = useState(contactsData.slice(0, 5));
  console.log(contacts);

  const contactTable = contacts.map((eachContact) => {
    let imageUrl = eachContact.pictureUrl;
    return (
      <tr>
        <td>
          <img src={imageUrl} alt={eachContact.name} />
        </td>
        <td>{eachContact.name}</td>
        <td>{eachContact.popularity}</td>
      </tr>
    );
  });

  return (
    <div className="App">
      <div>
        <table>
          <thead>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </thead>
          <tbody>{contactTable}</tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
