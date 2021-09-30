import React, { Component } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import { form, btn, input } from "./ContactForm.module.css";

const INITIAL_DATA = {
  name: "",
  number: "",
};

class ContactForm extends Component {
  state = { ...INITIAL_DATA };

  nameId = nanoid();
  numberId = nanoid();

  submitAndReset = (e) => {
    e.preventDefault();
    const contactData = this.state;
    this.props.handleSubmit(contactData);
    this.setState({ ...INITIAL_DATA });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, number } = this.state;
    const { inputName, inputTel, submitBtn } = this.props.dataUI;
    return (
      <form className={form} onSubmit={this.submitAndReset}>
        <label htmlFor={this.nameId}>{inputName}</label>
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
        <label htmlFor={this.numberId}>{inputTel}</label>
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
          {submitBtn}
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  handleSubmit: PropTypes.func,
  dataUI: PropTypes.shape({
    inputName: PropTypes.string,
    inputTel: PropTypes.string,
    submitBtn: PropTypes.string,
  }),
};

export default ContactForm;
