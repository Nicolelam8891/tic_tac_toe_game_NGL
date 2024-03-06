import React, { useState } from 'react';
import './Board.css';

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isTurn, setIsTurn] = useState(true)

 const handleClick = (squareIndex) => {
  if (squares[squareIndex]) { //return & do nothing 
    return; 
  }
    const newSquares = [...squares] //create copy of current squares state. Create new array to update state & avoid directly mutating state.

    newSquares[squareIndex] = isTurn ? '🐯' : '🐉'

    setSquares(newSquares);
    setIsTurn(!isTurn);
 }

return (
  <div className='board'>
   {squares.map((square, index) => (
    <button key={index} className='square' onClick={() => handleClick(index)}>
      {square}
    </button>
   ))}
  </div>
)
};

export default Board;
