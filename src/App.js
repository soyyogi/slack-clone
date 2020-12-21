import React from 'react'
import './App.css'
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app">
      {/* <LandingPage /> */}
      <Header />
      <div className="app__body">
        <Sidebar />
      </div>
    </div>
  )
}

export default App
