import React, { Component } from 'react';
import logo from '../assets/trybeLogo.png';

class Header extends Component {
  render() {
    return (
      <div className="header-container" >
        <img src={logo} alt="Logo da Trybe" />
        <h1 className="header-title" >Cadastro de Cartão de Crédito 💳</h1>
      </div>
    )
  }
}

export default Header