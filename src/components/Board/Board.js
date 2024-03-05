import React, { useState } from 'react';
import './Board.css';

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isTurn, setIsTurn] = useState(true)

 const handleClick = (squareIndex) => {
  if (squares[squareIndex]) {
    return; 
  }

    const newSquares = [...squares]
    console.log('newSquares', newSquares)

    newSquares[squareIndex] = isTurn ? '🐯' : '🐉'

    setSquares(newSquares);
    setIsTurn(!isTurn);
 }

return (
  <div className='board'>

  </div>
)
};

export default Board;
