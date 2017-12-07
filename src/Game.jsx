import React from 'react'
import {Board} from './Board'
import './index.css'

export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(props.width * props.depth).fill(''),
      xIsNext: true,
      winner: ''
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    if (!canClick(squares, i, this.props)) {
      return
    }
    let winner = calculateWinner(squares, i, this.props);
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
      winner: winner
    });
  }

  render() {
    const winner = this.state.winner
    let status;
    if (winner != '') {
      status = 'Winner: ' + winner
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

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

// クリック可能なsquareか判定
function canClick(squares, i, props) {
  if (isNullSquare(squares, i+props.width) || squares[i+props.width] != '') {
    return true
  } else {
    return false
  }
}

function calculateWinner(squares, i, props) {
  let playerChar = squares[i];
  // 横判定
  if (checkHorizontal(squares, i, playerChar, props)) {
    return squares[i]
  };
  // 縦判定
  if (checkVertical(squares, i, playerChar, props)) {
    return squares[i]
  };
  // 斜め判定（左上から右下）
  if (checkSlantingULLR(squares, i, playerChar, props)) {
    return squares[i]
  };
  // 斜め判定（右上から左下）
  if (checkSlantingURLL(squares, i, playerChar, props)) {
    return squares[i]
  };
  return ''
}

function isNullSquare(squares, i) {
  if (squares[i] == null) {
    return true
  } else {
    return false
  }
}

function checkHorizontal(squares, i, playerChar, props) {
  let chainNum = 0;
  // 左側チェック
  if (i%props.width != 0) {
    chainNum += checkLeftHorizontal(squares, i-1, playerChar, props, 0);
  }
  // 右側チェック
  if (i%(props.width-1) != 0) {
    chainNum += checkRightHorizontal(squares, i+1, playerChar, props, 0);
  }
  console.log(chainNum);
  // 勝利判定
  if (chainNum >= 3) {
    return true
  } else {
    return false
  }
}

// 左側につながっている個数を再帰的にチェック
function checkLeftHorizontal(squares, i, playerChar, props, chainNum) {
  if (isNullSquare(squares, i) || i%props.width == 0) {
    return chainNum
  }
  if (squares[i] == playerChar) {
    return checkLeftHorizontal(squares, i-1, playerChar, props, chainNum+1);
  } else {
    return chainNum
  }
}

// 右側につながっている個数を再帰的にチェック
function checkRightHorizontal(squares, i, playerChar, props, chainNum) {
  if (isNullSquare(squares, i) || i%(props.width-1) == 0) {
    return chainNum
  }
  if (squares[i] == playerChar) {
    return checkRightHorizontal(squares, i+1, playerChar, props, chainNum+1);
  } else {
    return chainNum
  }
}

function checkVertical(squares, i, playerChar, props) {
  let chainNum = 0;
  // 上側チェック
  chainNum += checkUpVertical(squares, i-props.width, playerChar, props, 0);
  // 下側チェック
  chainNum += checkDownVertical(squares, i+props.width, playerChar, props, 0);
  // 勝利判定
  if (chainNum >= 3) {
    return true
  } else {
    return false
  }
}

// 上側につながっている個数を再帰的にチェック
function checkUpVertical(squares, i, playerChar, props, chainNum) {
  if (isNullSquare(squares, i)) {
    return chainNum
  }
  if (squares[i] == playerChar) {
    return checkUpVertical(squares, i-props.width, playerChar, props, chainNum+1);
  } else {
    return chainNum
  }
}

// 下側につながっている個数を再帰的にチェック
function checkDownVertical(squares, i, playerChar, props, chainNum) {
  if (isNullSquare(squares, i)) {
    return chainNum
  }
  if (squares[i] == playerChar) {
    return checkDownVertical(squares, i+props.width, playerChar, props, chainNum+1);
  } else {
    return chainNum
  }
}

// 左上(upper left) から右下(lower right) の斜めチェック
function checkSlantingULLR(squares, i, playerChar, props) {
  let chainNum = 0;
  // 左上側チェック
  chainNum += checkSlantingUL(squares, i-props.width-1, playerChar, props, 0);
  // 右下チェック
  chainNum += checkSlantingLR(squares, i+props.width+1, playerChar, props, 0);
  // 勝利判定
  if (chainNum >= 3) {
    return true
  } else {
    return false
  }
}

// 左上側につながっている個数を再帰的にチェック
function checkSlantingUL(squares, i, playerChar, props, chainNum) {
  if (isNullSquare(squares, i)) {
    return chainNum
  }
  if (squares[i] == playerChar) {
    return checkSlantingUL(squares, i-props.width-1, playerChar, props, chainNum+1);
  } else {
    return chainNum
  }
}

// 右下側につながっている個数を再帰的にチェック
function checkSlantingLR(squares, i, playerChar, props, chainNum) {
  if (isNullSquare(squares, i)) {
    return chainNum
  }
  if (squares[i] == playerChar) {
    return checkSlantingLR(squares, i+props.width+1, playerChar, props, chainNum+1);
  } else {
    return chainNum
  }
}

// 右上(upper right) から左下(lower left) の斜めチェック
function checkSlantingURLL(squares, i, playerChar, props) {
  let chainNum = 0;
  // 右上側チェック
  chainNum += checkSlantingUR(squares, i-props.width+1, playerChar, props, 0);
  // 左下側チェック
  chainNum += checkSlantingLL(squares, i+props.width-1, playerChar, props, 0);
  // 勝利判定
  if (chainNum >= 3) {
    return true
  } else {
    return false
  }
}

// 右上側につながっている個数を再帰的にチェック
function checkSlantingUR(squares, i, playerChar, props, chainNum) {
  if (isNullSquare(squares, i)) {
    return chainNum
  }
  if (squares[i] == playerChar) {
    return checkSlantingUR(squares, i-props.width+1, playerChar, props, chainNum+1);
  } else {
    return chainNum
  }
}

// 左下側につながっている個数を再帰的にチェック
function checkSlantingLL(squares, i, playerChar, props, chainNum) {
  if (isNullSquare(squares, i)) {
    return chainNum
  }
  if (squares[i] == playerChar) {
    return checkSlantingLL(squares, i+props.width-1, playerChar, props, chainNum+1);
  } else {
    return chainNum
  }
}
