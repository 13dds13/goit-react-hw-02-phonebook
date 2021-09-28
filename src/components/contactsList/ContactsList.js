import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactsList.module.css";
import ContactsListFull from "./contactsListFull/ContactsListFull";
import ContactsListFiltered from "./contactsListFiltered/ContactsListFiltered";

const ContactsList = ({ contacts, filter, deleteContact }) => {
  return !filter ? (
    <ContactsListFull
      deleteContact={deleteContact}
      contacts={contacts}
      styles={styles}
    />
  ) : (
    <ContactsListFiltered
      deleteContact={deleteContact}
      contacts={contacts}
      filter={filter}
      styles={styles}
    />
  );
};

//? Возможно есть смысле проверить все пропсы тут и
//? не дублировать похожий код в последующий компонентах?

ContactsList.propTypes = {
  deleteContact: PropTypes.func,
  filter: PropTypes.string,
  contacts: PropTypes.arrayOf(PropTypes.object),
};

export default ContactsList;
