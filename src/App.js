import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import PlayerOne from './components/PlayerOne/PlayerOne';
import PlayerTwo from './components/PlayerTwo/PlayerTwo';
import Board from './components/Board/Board';

function App() {
  return (
    <div className='app'>
      <PlayerOne />
      <Header />
      <PlayerTwo />
      <Board />
    </div>
  );
}

export default App;
