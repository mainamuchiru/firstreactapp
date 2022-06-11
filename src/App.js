import logo from './logo.svg';
import './App.css';
// import Greeter from './Greeter'; 
import Clock from './Clock'; 

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
          Learn React
        </a>
        <Clock continent='Africa' City='Nairobi' /> <hr />
        <Clock continent='Europe' City='Paris' /> <hr />
        <Clock continent='Austraila' City='Canberra' /> <hr />
        <Clock continent='Asia' City='New Dheli' /> <hr />
        <Clock continent='North America' City='Washington DC' /> <hr />
        <Clock continent='South America' City='Sao Paulo' />
      </header>
    </div>
  );
}

export default App;
