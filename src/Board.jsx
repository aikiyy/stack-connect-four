import React from 'react'
import {Square} from './Square'

export class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(props.width * props.depth).fill(1)
    };
  }

  render() {
    var list = [];

    for(var i in this.state.squares){
      list.push(<li><Square value={this.state.squares[i]} /></li>);
    }

    return (
      <div>
        <h2>Board</h2>
        <div>{this.props.width}</div>
        <div>{this.props.depth}</div>
        <div>
          <ul>
            {list}
          </ul>
        </div>
      </div>
    );
  }
}
