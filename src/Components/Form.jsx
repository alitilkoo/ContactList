import React from "react";
import Search from "./Search.jsx";
import Contacts from "./Contacts.jsx";
import "../CSS/form.css";

const Form = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  addContact,
  searchTerm,
  handleSearch,
  filteredContacts,
}) => {
  return (
    <div className="main">
      <Search searchTerm={searchTerm} handleSearch={handleSearch} />
      <form>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
        />
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <button onClick={addContact} type="submit">
          <i class="fa-solid fa-plus"></i> Add
        </button>
      </form>
      <Contacts
        filteredContacts={filteredContacts}
      />
    </div>
  );
};

export default Form;
