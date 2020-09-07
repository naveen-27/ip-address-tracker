import React, { Component } from 'react'

class Map extends Component {

  static REQ_ADDR = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyDyV8grOSb_vfPrEynVo44jW-yqGkqOKz0&q=';

  render() {
    return (
      <div id="map">
        <iframe
          title="Map" width="100%" height="600px"
          frameborder="0" style={{ border: '0px' }}
          src={Map.REQ_ADDR + `${this.props.lat},${this.props.lgn}`}
        >
        </iframe>
      </div>
    )
  }
}

export default Map;