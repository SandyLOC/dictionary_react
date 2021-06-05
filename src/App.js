import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <div className="container">
      <header className="header">Dictionary</header>

      <footer className="codedby"><span >Coded by Sandra Lopez using React<img src={logo} className="App-logo" alt="logo" />and {" "}
        <a className="code" 
        href="/" 
        target="_blank" 
        rel="noopener noreferrer">
          open sourced on Github</a></span>
      </footer>
      </div>
    </div>
  );
}

export default App;
