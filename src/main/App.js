import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom'

import Menu from '../template/Menu'
import Routes from './Routes'

function App() {
 
  return (
    <div id="wrapper">
      <Menu />
      <div id="page-wrapper" className="gray-bg">
      <HashRouter>
        <Routes />
      </HashRouter>

      </div>
    </div>
  );
}

export default App;
