import React, { Component } from 'react';
import propTypes from 'prop-types';

import './styles.css';

class AddCommentField extends Component {

  static propTypes = {
    onAddComment: propTypes.func.isRequired,
  }

  state = {
    value: '',
  }

  handleInputChange = (evt) => {
    this.setState({ value: evt.target.value });
  }

  handleKeyUp = (evt) => {
    if (evt.ctrlKey && evt.keyCode === 13) {
      const { value } = this.state;

      this.props.onAddComment(value);
      this.setState({ value: '' });
    }
  }

  render() {
    return (
      <div className="comment-form">
        <div className="comment-form__avatar"></div>

        <textarea
          className="comment-form__field"
          value={this.state.value}
          onChange={this.handleInputChange}
          onKeyUp={this.handleKeyUp}
        />
      </div>
    );
  }

}

export default AddCommentField;
