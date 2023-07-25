import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  // Add a click handler to the button
  const buttonClicked = () => {
    setCount(count + 1)
    console.log('Button was clicked! The value of "count" is now: ' + count);

    // send GET request
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://oam.lusp.in:8443/')

    xhr.onload = function() {
      if (xhr.status === 200) {
        // Process the response data
        console.log(xhr.responseText);
      } else {
        // Handle errors
        console.error('Request failed. Status: ', xhr.status);
      }
    };

    xhr.send();

  }

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
        <div>
          <button id="clickerButton" onClick={buttonClicked} type="button">{`Button clicker: ${count}`}</button>
        </div>
      </header>
    </div>

  );
}

export default App;
