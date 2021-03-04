import logo from './logo.svg';
import './App.css';
import Heading from './Heading';
import MetalMeta from './MetalMeta';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div id="root"></div>
          Learn React
        </a>
        <Heading></Heading>
        <MetalMeta></MetalMeta>
      </header>
    </div>
  );
}

export default App;
