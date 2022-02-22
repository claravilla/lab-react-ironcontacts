import "./App.css";
import contactsData from "./contacts.json";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));

  const deleteContact = (id) => {
    let updatedArray = contacts.filter((eachContact) => {
      return eachContact.id !== id;
    });
    setContacts([...updatedArray]);
  };

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
        <td>{eachContact.wonEmmy ? "🌟" : ""}</td>
        <td>
          <button
            className="delete-btn"
            onClick={() => deleteContact(eachContact.id)}
          >
            🗑️
          </button>
        </td>
      </tr>
    );
  });

  const randomContact = () => {
    let contactArray = [];
    let isInContacts = false;
    for (let i = 0; i < contactsData.length; i++) {
      for (let j = 0; j < contacts.length; j++) {
        if (contactsData[i].id === contacts[j].id) {
          isInContacts = true;
        }
      }
      if (!isInContacts) {
        contactArray.push(contactsData[i]);
      }
      isInContacts = false;
    }

    let newContact =
      contactArray[
        Math.floor(Math.random() * (contactsData.length - contacts.length))
      ];
    setContacts(contacts.concat(newContact));
  };

  const sortPopularity = () => {
    let sortedArray = contacts.sort((a, b) => {
      return b.popularity - a.popularity;
    });
    setContacts([...sortedArray]);
  };

  const sortName = () => {
    let sortedArray = contacts.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else {
        return 1;
      }
    });
    setContacts([...sortedArray]);
  };

  return (
    <div className="App">
      <h1>Iron contacts</h1>
      <button onClick={randomContact}>Add Random Contact</button>
      <button onClick={sortPopularity}>Sort by Popularity</button>
      <button onClick={sortName}>Sort by Name</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>{contactTable}</tbody>
      </table>
    </div>
  );
}

export default App;
