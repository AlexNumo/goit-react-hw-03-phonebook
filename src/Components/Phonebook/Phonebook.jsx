import React, { Component } from "react";
import { nanoid } from 'nanoid';
import AddContacts from "./AddContacts";
import FormRender from "./FormRender";
import Search from "./Search";
import PropTypes from "prop-types";

class Phonebook extends Component {
  state = {
    contacts: [],
    filter: "",
  };
  formSubmitHandler = (data) => {
    const state = this.state.contacts
      .map((contact) => {
        return contact.name.includes(data.name);
      })
      .includes(true);
    if (state) {
      alert("такой контакт уже есть");
    } else {
      data.id = nanoid(5);
      this.setState({ contacts: [...this.state.contacts, data] });
    }
  };
  onDelForId = (evt) => {
    const list = this.state.contacts.filter(
      ({ id }) => id !== evt.currentTarget.id
    );
    alert(`Вы удалили контакт ${evt.currentTarget.name}`);
    this.setState({ contacts: list });
  };

  filterInputHandler = (input) => {
    let inputLC = input.toLowerCase();
    this.setState({ filter: inputLC });
    console.log(inputLC);
  };
  onFilter = () => {
    const { filter, contacts } = this.state;
    if (filter) {
      return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
    } else {
      return contacts;
    }
  };

  render() {
    const { filter } = this.state;
    const filtredContacts = this.onFilter();
    console.log(filtredContacts);
    return (
      <>
        <FormRender onSubmit={this.formSubmitHandler} />
        <Search onChange={this.filterInputHandler} />
        <AddContacts
          contacts={filtredContacts}
          filter={filter}
          changeId={this.onDelForId}
        />
      </>
    );
  }
}

export default Phonebook;

Phonebook.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string,
};