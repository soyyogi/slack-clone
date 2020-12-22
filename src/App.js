import React from 'react'
import './App.css'
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
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
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/room">
                  <h3>Welcome</h3>
                </Route>
              </Switch>
            </div>
          </Route>
        </Switch>
        
      </Router>
    </div>
  )
}

export default App
