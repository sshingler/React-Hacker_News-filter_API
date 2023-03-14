import logo from './logo.svg';
import './App.css';
import StoryContainer from './Containers/StoryContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hacker News</h1>
      </header>
      <StoryContainer />
    </div>
  );
}

export default App;
