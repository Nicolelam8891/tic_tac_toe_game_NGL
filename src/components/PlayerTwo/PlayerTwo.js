import './PlayerTwo.css'

const PlayerTwo = ( {scores} ) => {

  return (
    <main className='player-two'>
      <h1 className='player-two-title'>Player 2</h1>
      <p className='player-score'>Score: {scores}</p>
      <p className='baby'>🐉</p>
    </main>
  )
}

export default PlayerTwo;