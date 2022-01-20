import React, {Component} from "react";
import PropTypes from "prop-types";

export default class FormRender extends Component {
  state = {
    name: "",
    number: "",
    id: "",
  };

  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.formReset();
  };
  formReset = () => {
    this.setState({ name: "", number: "" });
  };
  render() {
    return (
      <>
        <h2>Add contact</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Имя
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            Телефон
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              value={this.state.number}
              onChange={this.handleChange}
              required
            />
          </label>
          <button type="submit">Add to phonebook</button>
        </form>
      </>
    );
  }
}
FormRender.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
