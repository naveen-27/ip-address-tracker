import React, { Component } from 'react'

class InfoBlock extends Component {
  render() {
    return (
      <div className="Detail">
        <h4 className="heading">{this.props.head}</h4>
        <h1 className="value">
          {this.props.head === 'timezone' ? `UTC ${this.props.value}` : this.props.value}
        </h1>
      </div>
    )
  }
}

export default InfoBlock;