import React, { Component } from 'react';
import propTypes from 'prop-types';

import './styles.css';

class AddItemField extends Component {

  static propTypes = {
    onAddItem: propTypes.func.isRequired,
  }

  state = {
    value: '',
  }

  handleInputChange = (evt) => {
    this.setState({ value: evt.target.value });
  }

  handleAddItem = () => {
    const { value } = this.state;

    this.props.onAddItem(value);
    this.setState({ value: '' });
  }

  isButtonActive = () => {
    const { value } = this.state;

    return value;
  }

  render() {
    return (
      <div className="item-form">
        <input
          type="text"
          placeholder="Type name here..."
          className="item-form__input"
          value={this.state.value}
          onChange={this.handleInputChange}
        />

        <button
          disabled={!this.isButtonActive()}
          onClick={this.handleAddItem}
          className="item-form__button"
        >Add new</button>
      </div>
    );
  }

}

export default AddItemField;
