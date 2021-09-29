import React, { Component } from "react";
import { nanoid } from "nanoid";
import INITIAL_DATA from "../data/initialData.json";
import ContactForm from "./contactForm/ContactForm";
import Filter from "./filter/Filter";
import ContactsList from "./contactsList/ContactsList";
import styles from "./container/Container.module.css";
import dataUI from "../data/dataUI.json";

const { alertMsg, allContacts, search, titleMain, titleSecondary } = dataUI;

class App extends Component {
  state = {
    contacts: [...INITIAL_DATA],
    filter: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (contactData) => {
    const { name, number } = contactData;

    const isAlreadyInContacts = this.state.contacts.find(
      (item) => item.name.toLowerCase() === name.toLowerCase()
    );

    if (isAlreadyInContacts) {
      alert(`${name} ${alertMsg}`);
      return;
    }

    this.setState((prev) => ({
      contacts: [
        ...prev.contacts,
        {
          name,
          id: nanoid(),
          number,
        },
      ],
    }));
  };

  deleteContact = (nameToDelete) => {
    const filteredContacts = this.state.contacts.filter(
      ({ name }) => name !== nameToDelete
    );
    this.setState({ contacts: [...filteredContacts] });
  };

  contactsToRender = ({ contacts, filter }) => {
    if (!filter) return { contacts, title: `${allContacts}` };

    const filteredContacts = contacts.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );

    return { contacts: filteredContacts, title: `${search}` };
  };

  render() {
    const { container, title } = styles;
    const { filter } = this.state;
    return (
      <div className={container}>
        <h2 className={title}>{titleMain}</h2>

        <ContactForm handleSubmit={this.handleSubmit} />

        <h2 className={title}>{titleSecondary}</h2>

        <Filter filter={filter} handleChange={this.handleChange} />

        <ContactsList
          contactsDataToRender={this.contactsToRender(this.state)}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
