import React from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";

const Filter = ({ handleChange, filter }) => {
  const findContactId = nanoid();
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
    </div>
  );
};

Filter.propTypes = {
  handleChange: PropTypes.func,
  filter: PropTypes.string,
};

export default Filter;
