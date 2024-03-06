import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import PlayerOne from './components/PlayerOne/PlayerOne';
import PlayerTwo from './components/PlayerTwo/PlayerTwo';
import Board from './components/Board/Board';

function App() {
  return (
    <main className='app'>
      <div className="left-sidebar">
        <PlayerOne />
      </div>
      <div className="main-content">
        <Header /> 
        <Board />
      </div>
      <div className="right-sidebar">
        <PlayerTwo />
      </div>
  </main>
  );
}

export default App;
