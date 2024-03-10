import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import PlayerOne from './components/PlayerOne/PlayerOne';
import PlayerTwo from './components/PlayerTwo/PlayerTwo';
import Board from './components/Board/Board';
import Confetti from 'react-confetti'

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isTurn, setIsTurn] = useState(true)
  const [scores, setScores] = useState({playerOne: 0, playerTwo: 0})
  const [winner, setWinner] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);



  const checkForWinner = (squares) => {
    const lines = [
      [0, 1, 2], 
      [3, 4, 5],
      [6, 7, 8], 
      [0, 3, 6], 
      [1, 4, 7], 
      [2, 5, 8], 
      [0, 4, 8], 
      [2, 4, 6]
    ];
      //destructure arrays into variables 
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a]
        }
      } 
    return null; //when there is no winner
    }
  return (
    <main className='app'>
      {winner && <Confetti />}
      {winner && <div className='winner-message'>{`Player ${winner} wins!`}</div>}
      <div className="left-sidebar">
        <PlayerOne setSquares={setSquares} setIsTurn={setIsTurn} setShowConfetti={setShowConfetti} setWinner={setWinner}/>
      </div>
      <div className="main-content">
        <Header /> 
        <Board squares={squares} setSquares={setSquares} isTurn={isTurn} setIsTurn={setIsTurn} checkForWinner={checkForWinner} setWinner={setWinner}/>
      </div>
      <div className="right-sidebar">
        <PlayerTwo />
      </div>
  </main>
  );
}

export default App;
