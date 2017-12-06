import React from 'react'
import {Square} from './Square'
import './index.css'

export class Board extends React.Component {
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

  renderSquare(i) {
    return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />
  }

  render() {
    var list = [];

    for(let i = 0; i < this.props.depth; i++) {
      list.push(<div className="board-list"></div>);
      for(let j = 0; j < this.props.width; j++) {
        let k = {i} * this.props.depth + this.props.width;
//        list.push(<Square value={this.state.squares[k]} onClick={() => this.handleClick(k)} />);
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
