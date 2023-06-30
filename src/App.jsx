import React, { useState } from "react";
import Form from "./Components/Form";
import "./CSS/style.css";

function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addContact = (e) => {
    e.preventDefault();
    if (!name && !phone && !email) alert("Please fill the inputs");
    else if (!name) alert("Enter a name");
    else if (!phone) alert("Enter a phone number");
    else if (!email || !email.includes("@") || !email.includes("."))
      alert("Enter a valid email");
    else if (name && phone && email) {
      const newContact = {
        name,
        phone,
        email,
      };

      setContacts([...contacts, newContact]);
      setName("");
      setPhone("");
      setEmail("");
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <Form
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
        addContact={addContact}
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        filteredContacts={filteredContacts}
      />
    </div>
  );
}

export default App;

