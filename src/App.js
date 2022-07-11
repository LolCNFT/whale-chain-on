import logo from './descarga.jpg';
import './App.css';
import Signature from './Signature';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='text'>
          Welcome to Whale-chain-on
        </p>
        <a
          className="App-link"
          href="https://twitter.com/LopezKanapi"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
        
      </header>
      <Signature/>
    </div>
  );
}

export default App;
