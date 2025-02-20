import './App.css';
import Counter from "./Counter";
import Form from './Name';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bem vindo!
        </p>
        <Form />
        <Counter />
      </header>
    </div>
  );
}

export default App;
