import React from 'react'
import './App.css'
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/room">
            <Header />
            <div className="app__body">
              <Sidebar />
            </div>
          </Route>
          
        </Switch>
        
      </Router>
    </div>
  )
}

export default App
