import React from 'react'
import {Board} from './Board'
import './index.css'

export class Game extends React.Component {
  render() {
    const depth = 7;
    const width = 15;

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
