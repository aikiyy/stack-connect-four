import React from 'react'
import {Board} from './Board'

export class Game extends React.Component {
  render() {
    const depth = 10;
    const width = 10;

    return (
      <div>
        <h1>Stack-Connect-Four</h1>
        <div className="game">
          <Board depth={depth} width={width} />
        </div>
      </div>
    );
  }
}
