import React, { Component } from 'react'

class EmailInput extends Component {
  render() {
    const { handleChange, email } = this.props;

    return (
      <label htmlFor="email">
        Escreva aqui seu Email ✉️
        <input
          type="text"
          name="email"
          id="email"
          onChange={ handleChange }
          value={ email }
        />
      </label>
    )
  }
}

export default EmailInput;
