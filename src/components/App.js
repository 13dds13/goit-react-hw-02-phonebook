import React, { Component } from "react";
import { nanoid } from "nanoid";

const tempData = [
  {
    id: 1,
    name: "Homer",
    number: "4856987",
  },
  {
    id: 2,
    name: "Marge",
    number: "648546",
  },
  {
    id: 3,
    name: "Bart",
    number: "759584",
  },
  {
    id: 4,
    name: "Lisa",
    number: "7951320",
  },
  {
    id: 5,
    name: "Maggie",
    number: "635455",
  },
  {
    id: 6,
    name: "Abe",
    number: "000000",
  },
];

class App extends Component {
  state = {
    contacts: tempData,
    filter: "",
    name: "",
    number: "",
  };

  nameId = nanoid();
  numberId = nanoid();
  findContactId = nanoid();

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState((prev) => ({
      contacts: [
        ...prev.contacts,
        { name: this.state.name, id: nanoid(), number: this.state.number },
      ],
    }));
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  findContact = (str) => {
    const filteredList = this.state.contacts.find((item) =>
      item.name.include(str)
    );
    return filteredList;
  };

  deleteContact = (name) => {
    const filteredContacts = this.state.contacts.filter(
      (item) => item.name !== name
    );
    this.setState({ contacts: [...filteredContacts] });
  };

  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.newId}>Enter name:</label>
          <input
            id={this.newId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            autoComplete="off"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <label htmlFor={this.numberId}>Enter number</label>
          <input
            id={this.numberId}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            autoComplete="off"
            onChange={this.handleChange}
            value={this.state.number}
          />
          <button type="submit">Add to contacts</button>
        </form>
        <h2>Contacts</h2>
        {/* <ul>
          {this.state.contacts.map(item => (
            <li key={item.id}>
              <p>
                {item.name}: <span>{item.number}</span>{' '}
              </p>
            </li>
          ))}
        </ul> */}
        <label htmlFor={this.findContactId}>Find contacts by name</label>
        <input
          id={this.findContactId}
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          autoComplete="off"
          onChange={this.handleChange}
          value={this.state.filter}
        />
        {this.state.filter && (
          <ul>
            {this.state.contacts
              .filter((item) =>
                item.name.toLowerCase().includes(this.state.filter)
              )
              .map((item) => (
                <li key={item.id}>
                  {" "}
                  <p>
                    {item.name}: {item.number}
                  </p>
                  <button
                    type="button"
                    onClick={() => this.deleteContact(item.name)}
                  >
                    Delete
                  </button>
                </li>
              ))}
          </ul>
        )}
      </>
    );
  }
}

export default App;
