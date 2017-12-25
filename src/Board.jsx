import React from 'react'
import {Square} from './Square'
import './index.css'

export class Board extends React.Component {
  renderSquare(i) {
    return <Square key={i} canClick={this.props.canClickSquares[i]} value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />
  }

  render() {
    var list = [];

    for(let i = 0; i < this.props.depth; i++) {
      list.push(<div key={(i+1)*1000} className="board-list"></div>);
      for(let j = 0; j < this.props.width; j++) {
        const k = i * this.props.width + j;
        list.push(this.renderSquare(k))
      }
    }

    return (
      <div>
        <h2>Board</h2>
        <div>{this.props.width}</div>
        <div>{this.props.depth}</div>
        <div>
          {list}
        </div>
      </div>
    );
  }
}
