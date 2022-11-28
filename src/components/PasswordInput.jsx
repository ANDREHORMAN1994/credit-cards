import React, { Component } from 'react'

class PasswordInput extends Component {
  render() {
    const { handleChange, password } = this.props;

    return (
      <label htmlFor="password">
        Escreva aqui sua senha 🔒
        <input
          type="password"
          name="password"
          id="password"
          onChange={ handleChange }
          value={ password }
        />
      </label>
    )
  }
}

export default PasswordInput;
