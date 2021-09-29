import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactsList.module.css";
import ContactsAllOrFiltered from "./contactsAllOrFiltered/ContactsAllOrFiltered";

const ContactsList = ({ contacts, filter, deleteContact }) => {
  return (
    <ContactsAllOrFiltered
      deleteContact={deleteContact}
      contacts={contacts}
      filter={filter}
      styles={styles}
    />
  );
};

ContactsList.propTypes = {
  deleteContact: PropTypes.func,
  filter: PropTypes.string,
  contacts: PropTypes.arrayOf(PropTypes.object),
};

export default ContactsList;
