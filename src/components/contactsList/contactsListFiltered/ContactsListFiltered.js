import React from "react";
import PropTypes from "prop-types";

const ContactsListFiltered = ({ filter, styles, contacts, deleteContact }) => {
  return (
    <>
      <p>Search results:</p>
      <ul className={styles.listWrap}>
        {contacts
          .filter((item) =>
            item.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map((item) => (
            <li className={styles.listItem} key={item.id}>
              {" "}
              <p className={styles.name}>
                {item.name}:{" "}
                <span className={styles.number}>{item.number}</span>
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

ContactsListFiltered.propTypes = {
  filter: PropTypes.string,
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

export default ContactsListFiltered;
