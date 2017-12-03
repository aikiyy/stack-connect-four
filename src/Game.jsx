import React from 'react'
import {Board} from './Board'

export class Game extends React.Component {
  render() {
    return (
      <div>
        <h1>Stack-Connect-Four</h1>
        <div className="game">
          <Board />
        </div>
      </div>
    );
  }
}
