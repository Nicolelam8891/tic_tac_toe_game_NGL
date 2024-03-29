import './Header.css'

const Header = ({ setShowConfetti, setSquares, setIsTurn, setWinner}) => {

  const handleNewGame = () => {
    setSquares(Array(9).fill(null))
    setIsTurn(true)
    setWinner(null);
    setShowConfetti(false);
   }

  return (
    <main className='header'>
      <h1 className='title'><em>TIC-TAC-TOE</em></h1>
      <div className='new-game-section'>
        <button className='new-game' onClick={() => handleNewGame()}>New Game</button>
      </div>
    </main>
  )
}

//test

export default Header;