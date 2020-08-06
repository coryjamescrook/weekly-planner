import React from 'react'
import dotenv from 'dotenv'

import configureApp from './config/conifigureApp'
import Overview from './components/Overview'

import './App.css'

dotenv.config()
configureApp()

function App() {
  return (
    <div className="App">
      <Overview />
    </div>
  );
}

export default App
