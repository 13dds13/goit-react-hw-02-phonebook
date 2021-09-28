import React from "react";
import PropTypes from "prop-types";

const ContactsListFull = ({ styles, contacts, deleteContact }) => {
  return (
    <>
      <p>All contacts:</p>
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
    </>
  );
};

ContactsListFull.propTypes = {
  deleteContact: PropTypes.func,
  styles: PropTypes.objectOf(PropTypes.string),
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};

export default ContactsListFull;
