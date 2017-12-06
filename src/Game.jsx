import React from 'react'
import {Board} from './Board'
import './index.css'

export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(props.width * props.depth).fill(null)
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares});
  }

  render() {
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
      </div>
    );
  }
}
