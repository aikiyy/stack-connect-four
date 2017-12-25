import React from 'react'
import './index.css'

const style = {
  container: {
    backgroundColor: '#FFCC80'
  }
}

export class Square extends React.Component {
  render() {
    const canClickStyle = this.props.canClick ? style.container : null;

    return (
      <button
        className="square"
        onClick={() => this.props.onClick()}
        style={canClickStyle}
      >
        {this.props.value}
      </button>
    );
  }
}
