import React, { Component } from "react";
import { nanoid } from "nanoid";
import INITIAL_DATA from "../data/initialData.json";
import ContactForm from "./contactForm/ContactForm";
import Filter from "./filter/Filter";
import ContactsList from "./contactsList/ContactsList";
import styles from "./container/Container.module.css";

class App extends Component {
  state = {
    contacts: [...INITIAL_DATA],
    filter: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = e.target;
    const newName = name.value;
    const newNumber = number.value;

    const isAlreadyInContacts = this.state.contacts.find(
      ({ name }) => name.toLowerCase() === newName.toLowerCase()
    );

    if (isAlreadyInContacts) {
      alert(`${newName} is already in contacts`);
      return;
    }

    this.setState((prev) => ({
      contacts: [
        ...prev.contacts,
        {
          name: newName,
          id: nanoid(),
          number: newNumber,
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

  render() {
    const { contacts, filter } = this.state;
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Phonebook</h2>

        <ContactForm handleSubmit={this.handleSubmit} />

        <h2 className={styles.title}>Contacts</h2>

        <Filter
          contacts={contacts}
          filter={filter}
          handleChange={this.handleChange}
          deleteContact={this.deleteContact}
          findContactId={this.findContactId}
        />

        <ContactsList
          contacts={contacts}
          filter={filter}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
