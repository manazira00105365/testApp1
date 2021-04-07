import logo from '../../logo.svg';
import './App.css';
import CreditCardDetailsForm from '../CreditCardDetailsForm/creditCardDetailsForm';

/* function App() {
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
      </header>
    </div>
  );
} */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Sample React App</h1>
      </header>
      <section className="contentSection">
          <CreditCardDetailsForm />
      </section>
    </div>
  );
}

export default App;
