import React from 'react';



export default class Option extends React.Component{
    render(){
        return(
            <div className="feature__item">
                  <input
                    type="radio"
                    id={this.props.id}
                    className="feature__option"
                    name={this.props.name}
                    checked={this.props.checked}
                    onChange={e=>this.props.onChange(this.props.feature, this.props.item)}
                  />
                  <label htmlFor={this.props.id} className="feature__label">
                    {this.props.item.name} ({this.props.cost})
                  </label>
                </div>
        )
    }
}