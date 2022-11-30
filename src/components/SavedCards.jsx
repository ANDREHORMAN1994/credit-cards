import React, { Component } from 'react';
import Card from 'react-credit-cards-2';
import 'react-credit-cards-2/es/styles-compiled.css';

export class SavedCards extends Component {
  render() {
    const { registeredCards } = this.props;

    return (
      <>
        <h2>Cartões Registrados</h2>
        <section>
          {
            registeredCards.map(({ cvc, expiry, name, number }) => (
              <li key={number}>
                <Card
                  cvc={ cvc }
                  expiry={ expiry }
                  name={ name }
                  number={ number }
                />
              </li>
            ))
          }
        </section>
      </>
    )
  }
}

export default SavedCards;
