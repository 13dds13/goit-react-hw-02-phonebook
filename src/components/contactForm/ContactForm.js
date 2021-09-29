import React, { Component } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import { form, btn, input } from "./ContactForm.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  nameId = nanoid();
  numberId = nanoid();

  // removeLastLetter = (value) => {
  //   const currentStateValue = this.state[value];

  //   if (!currentStateValue) {
  //     return;
  //   }
  //   const shorterStr = currentStateValue.slice(0, -1);
  //   this.setState({ [value]: shorterStr });
  //   this.removeLastLetter(value);
  // };

  submitAndReset = (e) => {
    e.preventDefault();
    this.props.handleSubmit(e);
    this.setState({ name: "", number: "" });
    // this.removeLastLetter("name");
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={form} onSubmit={this.submitAndReset}>
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
        <button className={btn} type="submit">
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
