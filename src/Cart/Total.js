import React from 'react';
import { render } from 'react-dom';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

export default class Total extends React.Component{
    render(){
        return(
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                {USCurrencyFormat.format(this.props.total)}
              </div>
            </div>
        )
    }
    
}