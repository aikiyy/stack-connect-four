import React from 'react'
import ReactDOM from 'react-dom'
import {Game} from './Game'

const depth = 7;
const width = 15;

ReactDOM.render(
  <Game depth={depth} width={width} />,
  document.getElementById('root')
)
