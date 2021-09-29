import React from "react";
import PropTypes from "prop-types";
import { deleteBtn, noSearchResult } from "../../data/dataUI.json";
import styles from "./ContactsList.module.css";

const { listWrap, listItem, name, number, btn } = styles;

const ContactsList = ({
  contactsDataToRender: { title, contacts },
  deleteContact,
}) => {
  return contacts.length ? (
    <>
      <p>{title}</p>
      <ul className={listWrap}>
        {contacts.map((item) => (
          <li className={listItem} key={item.id}>
            {" "}
            <p className={name}>
              {item.name}: <span className={number}>{item.number}</span>
            </p>
            <button
              className={btn}
              name={item.name}
              type="button"
              onClick={() => deleteContact(item.name)}
            >
              {deleteBtn}
            </button>
          </li>
        ))}
      </ul>
    </>
  ) : (
    <p>{noSearchResult}</p>
  );
};

ContactsList.propTypes = {
  deleteContact: PropTypes.func,
  contactsDataToRender: PropTypes.shape({
    title: PropTypes.string,
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
      })
    ),
  }),
};

export default ContactsList;
