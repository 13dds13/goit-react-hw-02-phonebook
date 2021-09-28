import React, { Component } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import { form, btn, input } from "./ContactForm.module.css";

// const INITIAL_STATE = { name: "", number: "" };

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  nameId = nanoid();
  numberId = nanoid();

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  // handleClick = (e) => {
  //   this.setState({ ...INITIAL_STATE });
  // };

  render() {
    const { name, number } = this.state;
    return (
      <form className={form} onSubmit={this.props.handleSubmit}>
        <label htmlFor={this.nameId}>Enter name:</label>
        <input
          className={input}
          id={this.nameId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          autoComplete="off"
          onChange={this.handleChange}
          value={name}
        />
        <label htmlFor={this.numberId}>Enter number:</label>
        <input
          className={input}
          id={this.numberId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          autoComplete="off"
          onChange={this.handleChange}
          value={number}
        />
        <button
          className={btn}
          type="submit"
          // onClick={this.handleClick}
        >
          Add to contacts
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  handleSubmit: PropTypes.func,
};

export default ContactForm;
