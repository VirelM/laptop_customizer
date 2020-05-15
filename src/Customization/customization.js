import React from 'react';
import Feature from './feature';
import '../App.css';




  
export default class Customize extends React.Component {
    render(){
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;

            return <Feature key={featureHash} feature={feature} features={this.props.features} onChange={this.props.onChange} selected={this.props.selected} />
          });
        return(
            <form className="main__form">
            <h2>Customize your laptop</h2>
            {features}
          </form>
        )
    }
}