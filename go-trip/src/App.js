import React from 'react';
import logo from './logo.svg';
import  style from './App.less';
import {Button} from 'antd'; 

function App() {
  return (
    <div className={style.App}>
      <Button>antd </Button>
      <div className="yellow">我是黄色的div</div>
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
}

export default App;
