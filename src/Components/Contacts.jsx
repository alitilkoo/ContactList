import React from "react";
import "../CSS/contacts.css";

const Contacts = ({ filteredContacts }) => {
  return (
    <div>
      <div id="contacts">
        <table>
          <thead>
            <tr className="first-row">
              <th>
                <i class="fa-solid fa-user"></i> Name
              </th>
              <th>
                <i class="fa-solid fa-phone"></i> Phone
              </th>
              <th>
                <i class="fa-solid fa-envelope"></i> Email
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="other-rows">
              {filteredContacts.map((contact, index) => (
                <div key={index} className="contact-item">
                  <td className="first-td">{contact.name}</td>

                  <td>{contact.phone}</td>

                  <td>{contact.email}</td>
                </div>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contacts;
