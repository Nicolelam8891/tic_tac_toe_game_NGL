import './PlayerOne.css'
import Board from '../Board/Board';

const PlayerOne = ( {setSquares, setIsTurn, setShowConfetti, setWinner} ) => {
  
  const handleNewGame = () => {
    setSquares(Array(9).fill(null))
    setIsTurn(true)
    setWinner(null);
    setShowConfetti(false);
   }

  return (
    <main className='player-one'>
      <h2 className='player-one-title'>Player 1</h2>
      <p className='jadalynn'>🐯</p>
      <div className='new-game-section'>
        <button className='new-game' onClick={() => handleNewGame()}>New Game</button>
      </div>
    </main>
  )
}

export default PlayerOne;