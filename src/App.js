import "./App.css";
import contactsData from "./contacts.json";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));
  console.log(contacts);

  const contactTable = contacts.map((eachContact) => {
    let imageUrl = eachContact.pictureUrl;
    return (
      <tr key={eachContact.id}>
        <td>
          <img src={imageUrl} alt={eachContact.name} />
        </td>
        <td>{eachContact.name}</td>
        <td>{eachContact.popularity}</td>
        <td>{eachContact.wonOscar ? "🏆" : ""}</td>
        <td>{eachContact.wonEmmy ? "🏆" : ""}</td>
      </tr>
    );
  });

  const randomContact = () => {
    let contactArray = contactsData.slice(contacts.length);
    let newContact =
      contactArray[
        Math.floor(Math.random() * (contactsData.length - contacts.length))
      ];
    console.log(newContact);
    setContacts(contacts.concat(newContact));
  };

  return (
    <div className="App">
      <h1>Iron contacts</h1>
      <button onClick={randomContact}>Add Random Contact</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>

        <tbody>{contactTable}</tbody>
      </table>
    </div>
  );
}

export default App;
