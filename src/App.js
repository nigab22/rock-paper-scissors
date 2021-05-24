import './App.css';
import Hands from './components/hands/Hands';
import Contest from './components/contest/Contest';
import Rules from './components/rules/Rules';
import ScoreBoard from './components/scoreboard/ScoreBoard';
import { useSelector } from 'react-redux';

function App() {
  const userHand = useSelector((state) => state.game.userHand);
  return (
    <div className="app">
      <ScoreBoard />
      {userHand ? <Contest /> : <Hands />}
      <Rules />
    </div>
  );
}

export default App;
