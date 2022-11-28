import React from 'react';
import Header from './components/Header';
import FormLogin from './pages/FormLogin';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <FormLogin />
      </>
    );
  }
}

export default App;
