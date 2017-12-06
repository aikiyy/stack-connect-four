import React from 'react'
import './index.css'

export class Square extends React.Component {
  render() {
    return (
      <button key={this.props.num} className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}
