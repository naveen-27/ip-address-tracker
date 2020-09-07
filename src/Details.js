import React, { Component } from 'react';
import InfoBlock from './InfoBlock';
import './stylesheets/Details.css';

class Details extends Component {
  render() {
    let keys = Object.keys(this.props)
    return (
      <div className="Details">
        { keys.map(key => <InfoBlock head={key} value={this.props[key]} key={key} />) }
      </div>
    )
  }
}

export default Details;