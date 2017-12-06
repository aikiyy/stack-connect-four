import React from 'react'
import {Board} from './Board'
import './index.css'

export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(props.width * props.depth).fill(null),
      xIsNext: true
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    });
  }

  render() {
    let status;
    status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    return (
      <div>
        <h1>Stack-Connect-Four</h1>
        <div className="game">
          <Board
            depth={this.props.depth}
            width={this.props.width}
            squares={this.state.squares} 
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
        </div>
      </div>
    );
  }
}
