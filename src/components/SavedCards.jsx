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
              <Card
                key={number}
                cvc={ cvc }
                expiry={ expiry }
                name={ name }
                number={ number }
              />
            ))
          }
        </section>
      </>
    )
  }
}

export default SavedCards;