import React from 'react';
import './App.css';
import Home from './components/Home';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import frontImage from './assets/images/front2.jpg';
function App() {
  return (
    <div style={{backgroundImage : `url(${frontImage})`}} className="App">
      <Route path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup}/>
    </div>
  );
}

export default App;
