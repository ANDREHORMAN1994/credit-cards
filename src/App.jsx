import React from 'react';
import Header from './components/Header';
import Card from 'react-credit-cards-2';
import 'react-credit-cards-2/es/styles-compiled.css';
import './App.css';

// TASKS VALIDAÇÃO
// 01 - name tiver mais do que 1 palavra
// 02 - cvc tiver 3 digitos
// 03 - data estiver num formato correto

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
  render() {
    return (
      <>
        <Header />
        <main>
          <section>
            <Card
              name={''}
              number={''}
              expiry={''}
              cvc={''}
              focused={''}
            />
          </section>
        </main>
      </>
    );
  }
}

export default App;
