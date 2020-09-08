import React, { Component } from 'react'

class Map extends Component {

  static REQ_ADDR = `https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_MAPS_API_KEY}&q=`;

  render() {
    return (
      <div id="map">
        <iframe
          title="Map" width="100%" height="600px"
          frameBorder="0" style={{ border: '0px' }}
          src={Map.REQ_ADDR + `${this.props.lat},${this.props.lgn}`}
        >
        </iframe>
      </div>
    )
  }
}

export default Map;