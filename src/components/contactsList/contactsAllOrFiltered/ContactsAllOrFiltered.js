import React from "react";
import PropTypes from "prop-types";

const ContactsAllOrFiltered = ({ filter, styles, contacts, deleteContact }) => {
  return (
    <>
      {filter ? <p>Search results:</p> : <p>All contacts:</p>}
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

ContactsAllOrFiltered.propTypes = {
  filter: PropTypes.string,
  deleteContact: PropTypes.func,
  styles: PropTypes.objectOf(PropTypes.string),
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};

export default ContactsAllOrFiltered;
