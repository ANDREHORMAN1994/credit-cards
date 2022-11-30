import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import SavedCards from './components/SavedCards';
import Card from 'react-credit-cards-2';
import 'react-credit-cards-2/es/styles-compiled.css';
import './App.css';

// TAREFAS
// 01 - Criar Formulário
// 02 - Criar Estado do Formulário
// 03 - Criar o handleChange
// 03 - Subir Estado + handleChange para o App
// 04 - Compartilhar infos com o Card
// 05 - Criar Botão no Form + validação dos Campos
// 06 - Validação do Botão

// Bônus - Registrar + Renderizar cartões na aplicação

class App extends React.Component {
  state = {
    disabledButton: true,
    cvc: '',
    expiry: '',
    name: '',
    number: '',
    focus: '',
    registeredCards: [
      {
        cvc: '370',
        expiry: '1130',
        name: 'teste 1',
        number: '3700000000000000',
      },
      {
        cvc: '370',
        expiry: '1130',
        name: 'teste 2',
        number: '4100000000000000',
      },
      {
        cvc: '370',
        expiry: '1130',
        name: 'teste 3',
        number: '5500000000000000',
      }
    ],
  }

  validationFields = () => {
    // 01 - name tiver mais do que 1 palavra
    // 02 - cvc tiver 3 digitos
    // 03 - data estiver num formato correto
    // 04 - number tiver 16 dígitos

    const { cvc, expiry, name, number } = this.state;
    const validationCVC = cvc.length === 3;
    const validationDate = expiry.length === 4;
    const validationNumber = number.length === 16;
    const validationName = /^((?:[A-Za-z]+ ?){1,4})$/gm.test(name);
    this.setState({
      disabledButton: !(validationCVC && validationDate && validationName && validationNumber),
    });
  }

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    }, this.validationFields);
  }

  handleFocus = ({ target: { name } }) => {
    this.setState({ focus: name });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { cvc, expiry, focus, name, number } = this.state;
    const newCard = { cvc, expiry, focus, name, number };

    this.setState((prev) => ({
      registeredCards: [ ...prev.registeredCards, newCard ],
    }))
  }

  render() {
    const { cvc, expiry, focus, name, number } = this.state;
    return (
      <>
        <Header />
        <main>
          <section>
            <Form
              handleChange={this.handleChange}
              handleFocus={this.handleFocus}
              handleSubmit={this.handleSubmit}
              {...this.state}
            />

            <Card
              cvc={cvc}
              expiry={expiry}
              focused={focus}
              name={name}
              number={number}
            />
          </section>

          <SavedCards registeredCards={this.state.registeredCards} />
        </main>
      </>
    );
  }
}

export default App;
