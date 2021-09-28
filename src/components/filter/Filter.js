import React from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";

const Filter = ({
  findContactId,
  deleteContact,
  handleChange,
  filter,
  contacts,
}) => {
  return (
    <div className={styles.wrap}>
      <label htmlFor={findContactId}>Find contact by name: </label>
      <input
        id={findContactId}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        autoComplete="off"
        onChange={handleChange}
        value={filter}
      />
      {filter && (
        <ul className={styles.listWrap}>
          {contacts
            .filter((item) => item.name.toLowerCase().includes(filter))
            .map((item) => (
              <li className={styles.listItem} key={item.id}>
                {" "}
                <p className={styles.name}>
                  {item.name}:{" "}
                  <span className={styles.number}>{item.number}</span>
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
      )}
    </div>
  );
};

Filter.propTypes = {
  findContactId: PropTypes.string,
  deleteContact: PropTypes.func,
  handleChange: PropTypes.func,
  filter: PropTypes.string,
  contacts: PropTypes.arrayOf(PropTypes.object),
};

export default Filter;
