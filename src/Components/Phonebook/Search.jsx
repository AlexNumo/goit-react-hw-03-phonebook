import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  handleSearch = (event) => {
    const { value } = event.currentTarget;
    this.props.onChange(value);
  };
  render() {
    return (
      <form>
        <h2> Your contacts </h2>
        <label>
          Найти контакт по имени
          <input
            type="text"
            name="filter"
            title="Name search. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            onChange={this.handleSearch}
            required
          />
        </label>
      </form>
    );
  }
}

export default Search;

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
};
