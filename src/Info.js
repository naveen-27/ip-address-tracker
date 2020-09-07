import React, { Component } from 'react';
import Form from './Form';
import Details from './Details';
import './stylesheets/Info.css';

class Info extends Component {
  render() {
    return (
      <div className="Info--wrapper">
        <h1 className="brand">IP Address Tracker</h1>
        <Form reqInfo={this.props.reqInfo}/>

        <Details
          ip_address={this.props.ip}
          location={this.props.location}
          timezone={this.props.timezone}
          isp={this.props.isp}
        />
      </div>
    )
  }
}

export default Info;