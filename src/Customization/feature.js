import React from 'react';
import Option from './options';

import slugify from 'slugify';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

export default class Feature extends React.Component{
    render(){
        const options = this.props.features[this.props.feature].map(item => {
            const itemHash = slugify(JSON.stringify(item));

            return <Option key={itemHash} feature={this.props.feature} features={this.props.features} onChange={this.props.onChange} checked={item.name === this.props.selected[this.props.feature].name} cost={USCurrencyFormat.format(item.cost)} item={item} id={itemHash}/>
          });
        return (
            <fieldset className="feature" key={this.props.featureHash}>
              <legend className="feature__name">
                <h3>{this.props.feature}</h3>
              </legend>
              {options}
            </fieldset>
          );
    }
}