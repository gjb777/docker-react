import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          </p><br></br>
        <p>
          In fact, this file has been edited already!
          </p><br></br>
        <p>Thrice in fact. And saved godammit.  So it should work...
          </p><br></br>
        <p>And here's another line to test dynamic updating</p>  
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
