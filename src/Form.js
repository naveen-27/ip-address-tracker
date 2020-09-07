import React, { Component } from 'react';
import './stylesheets/Form.css';
import arrow from './images/icon-arrow.svg'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { ip: '', isValid: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ 
      [e.target.id]: e.target.value,
      isValid: this.validIP(e.target.value)
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.reqInfo(this.state.ip);
  }

  validIP(ip) {
    let ipSegments = ip.split('.');
    return (ipSegments.length === 4) && (ipSegments.every(seg => parseInt(seg) <= 255));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          id="ip"
          aria-label="ip"
          onChange={this.handleChange}
          required
          placeholder="Search for any IP address"
        />

        <button disabled={!this.state.isValid}>
          <img src={arrow} alt="" />
        </button>
      </form>
    )
  }
}

export default Form;