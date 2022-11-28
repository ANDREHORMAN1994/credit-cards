import React, { Component } from 'react';
import EmailInput from '../components/EmailInput';
import PasswordInput from '../components/PasswordInput';

class FormLogin extends Component {
  state = {
    email: '',
    password: '',
    disabledButton: true,
    registeredEmails: [],
  }

  validationFields = () => {
    // Regras de Negócio
    // Email e Senha maior que 6
    const { email, password } = this.state;
    const regexEmail = /^\w+@\w+\.\w+$/gm;
    const validEmail = regexEmail.test(email);
    const validCases = validEmail && password.length > 6;
    this.setState({
      disabledButton: !validCases,
    });
  }

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    }, this.validationFields);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email } = this.state;

    this.setState((prev) => ({
      registeredEmails: [ ...prev.registeredEmails, email ],
    }))

    alert(`Bem Vindo ${email}`);
  }

  render() {
    const { email, password, disabledButton } = this.state;

    return (
      <form onSubmit={ this.handleSubmit } >
        <EmailInput handleChange={ this.handleChange } email={ email }  />
        <PasswordInput  handleChange={ this.handleChange } password={ password } />
        <button type="submit" disabled={ disabledButton } >Entrar</button>
      </form>
    )
  }
}

export default FormLogin
