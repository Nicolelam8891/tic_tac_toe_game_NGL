import React, { useState } from 'react';
import './Board.css';
import { useEffect } from 'react';

const Board = ({isTurn, setIsTurn, squares, setSquares, checkForWinner, setWinner}) => {

 const handleClick = (squareIndex) => {
  if (squares[squareIndex]) { //return & do nothing 
    return; 
  }
    const newSquares = [...squares] //create copy of current squares state. Create new array to update state & avoid directly mutating state.

    newSquares[squareIndex] = isTurn ? '🐯' : '🐉'

    setSquares(newSquares);
    setIsTurn(!isTurn);
 }
 
 useEffect(() => {
  const winner = checkForWinner(squares);
  if (winner) {
    setWinner(winner);
  }
}, [squares, checkForWinner]);


return (
  <main className='board'>
   {squares.map((square, index) => (
    <button key={index} className='square' onClick={() => handleClick(index)}>
      {square}
    </button>
   ))}
  </main>
)
};

export default Board;
