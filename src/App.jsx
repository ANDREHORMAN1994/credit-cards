import React from 'react';
import Header from './components/Header';
import Card from 'react-credit-cards-2';
import 'react-credit-cards-2/es/styles-compiled.css';
import './App.css';
import Form from './components/Form';

// TAREFAS
// 01 - Criar Formulário
// 02 - Criar Estado do Formulário
// 03 - Criar o handleChange
// 04 - Compartilhar infos com o Card
// 05 - Criar Botão no Form + validação dos Campos
// 06 - Validação do Botão

// Bônus - Registrar + Renderizar cartões na aplicação

class App extends React.Component {
  state = {
    name: '',
    number: '',
    expiry: '',
    cvc: '',
    focus: '',
    disableButton: true,
  }

  validationFields = () => {
    // TASKS VALIDAÇÃO
    // 01 - name tiver mais do que 1 palavra
    // 02 - cvc tiver 3 digitos
    // 03 - data estiver tiver 4 digitos
    const { cvc, expiry, name } = this.state;
    const validationName = /^((?:[A-Za-z]+ ?){1,3})$/gm.test(name);
    const validationCVC = cvc.length === 3;
    const validationDate = expiry.length === 4;

    this.setState({
      disableButton: !(validationName && validationCVC && validationDate),
    })
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    }, this.validationFields)
  }

  handleFocus = ({ target: { name } }) => {
    this.setState({
      focus: name,
    })
  }

  render() {
    const { cvc, expiry, name, number, focus  } = this.state;

    return (
      <>
        <Header />
        <main>
          <section>
            <Form
              {...this.state}
              handleChange={this.handleChange}
              handleFocus={this.handleFocus}
            />

            <Card
              name={name}
              number={number}
              expiry={expiry}
              cvc={cvc}
              focused={focus}
            />
          </section>
        </main>
      </>
    );
  }
}

export default App;
