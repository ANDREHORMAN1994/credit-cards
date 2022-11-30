import React, { Component } from 'react'

// TASKS VALIDAÇÃO
// 01 - name tiver mais do que 1 palavra
// 02 - cvc tiver 3 digitos
// 03 - data estiver num formato correto

class Form extends Component {
  render() {
    const {
        handleChange,
        handleSubmit,
        handleFocus,
        number,
        name,
        cvc,
        expiry,
        disabledButton
    } = this.props;

    return (
      <form onSubmit={handleSubmit} >
        <label htmlFor="number">
          Número do cartão
          <input
            type="text"
            name="number"
            id="number"
            onChange={ handleChange }
            onFocus={ handleFocus }
            value={ number }
          />
        </label>
        <label htmlFor="name">
          Nome do cartão
          <input
            type="text"
            name="name"
            id="name"
            onChange={ handleChange }
            onFocus={ handleFocus }
            value={ name }
          />
        </label>
        <label htmlFor="cvc">
          CVC do cartão
          <input
            type="text"
            name="cvc"
            id="cvc"
            onChange={ handleChange }
            onFocus={ handleFocus }
            value={ cvc }
          />
        </label>
        <label htmlFor="expiry">
          Data de validade
          <input
            type="text"
            name="expiry"
            id="expiry"
            onChange={ handleChange }
            onFocus={ handleFocus }
            value={ expiry }
          />
        </label>

        <button disabled={disabledButton} >Cadastrar Cartão</button>
      </form>
    )
  }
}

export default Form;
