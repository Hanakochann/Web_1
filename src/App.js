import React from 'react';
import logo from './logo.svg';
import img from './assets/square.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="part1">
          VERSION 6
        </div>
        <div className="part2">
          <img className="img" src={img}/>
        </div>
        <div className="part3">
          THE
          <br/> ULTIMATE
          <br/> WORKPRESS
          <br/> THEME
        </div>
	    </div>
	    <div className="boder">
        <ul>
          <li>
            <a href="www.google.com">X</a>
          </li>
          <li>
            <a href="www.google.com">STACKS</a>		
          </li>
          <li >
            <a href="www.google.com">EXTENSIONS</a>
          </li>
          <li>
            <a href="www.google.com">CORNERSTONE</a>				
          </li>
          <li>
            <a href="www.google.com">EXPERTS</a>			
          </li>
          <li>
            <a href="www.google.com">CUSTOMIZER</a>			
          </li>
          <li>
            <a href="www.google.com">FEATURES</a>
          </li>
          <li>
            <a href="www.google.com">DEMOS</a>		
          </li>
          <li>
            <a href="www.google.com">BUY</a>
          </li>
        </ul>
	</div>
    </div>
  );
}

export default App;
