import './PlayerOne.css'
import Board from '../Board/Board';

const PlayerOne = ( {scores, setSquares, setIsTurn, setShowConfetti, setWinner} ) => {
  
  return (
    <main className='player-one'>
      <h2 className='player-one-title'>Player 1</h2>
      <p className='player-score'>Score: {scores}</p>
      <p className='jadalynn'>🐯</p>
    
    </main>
  )
}

export default PlayerOne;