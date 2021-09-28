import React from "react";
import PropTypes from "prop-types";

const ContactsList = ({ contacts, filter, deleteContact }) => {
  return (
    !filter && (
      <ul>
        {contacts.map((item) => (
          <li key={item.id}>
            <p>
              {item.name}: <span>{item.number}</span>{" "}
            </p>
            <button
              name={item.name}
              type="button"
              onClick={() => deleteContact(item.name)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    )
  );
};

ContactsList.propTypes = {
  deleteContact: PropTypes.func,
  filter: PropTypes.string,
  contacts: PropTypes.arrayOf(PropTypes.object),
};

export default ContactsList;
