import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactsList.module.css";

const ContactsList = ({ contacts, filter, deleteContact }) => {
  return (
    !filter && (
      <ul className={styles.listWrap}>
        {contacts.map((item) => (
          <li className={styles.listItem} key={item.id}>
            <p className={styles.name}>
              {item.name}: <span className={styles.number}>{item.number}</span>{" "}
            </p>
            <button
              className={styles.btn}
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
