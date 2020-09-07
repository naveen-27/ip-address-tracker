import React, { Component } from 'react';
import axios from 'axios';
import Info from './Info';
import Map from './Map';
import './stylesheets/App.css';

class App extends Component {

  static REQ_ADDR = 'https://geo.ipify.org/api/v1?apiKey=at_eFRMg40JX7nBOZb9HIhrpEUKlJlDD';

  constructor(props) {
    super(props);
    this.state = {
      ip: '',
      location: '',
      timezone: '',
      isp: '',
      latitude: '',
      longitude: ''
    }
    this.applyStateChange = this.applyStateChange.bind(this);
    this.requestInfo = this.requestInfo.bind(this);
  }

  async componentDidMount() {
    let info = await axios.get(App.REQ_ADDR);
    this.applyStateChange(info);
  }

  async requestInfo(ip) {
    let info = await axios.get(App.REQ_ADDR + `&ipAddress=${ip}`);
    this.applyStateChange(info);
  }

  applyStateChange(info) {
    this.setState({ 
      ip: info.data.ip,
      isp: info.data.isp,
      location: info.data.location.region,
      timezone: info.data.location.timezone,
      latitude: info.data.location.lat,
      longitude: info.data.location.lng,
      });
  }

  render() {
    return (
      <div>
        <Info
          isp={this.state.isp}
          ip={this.state.ip}
          location={this.state.location}
          timezone={this.state.timezone}
          reqInfo={this.requestInfo}
        />
        <Map lat={this.state.latitude} lgn={this.state.longitude} />
      </div>
    )
  }
}

export default App;