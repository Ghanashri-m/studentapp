import React from 'react';
import {Route} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './components/';
import Tickets from './components/Tickets';
import './App.css';

function App() {
  return (
    <>
      <CssBaseline />
        <Route exact path='/' component={Home} />
        <Route path='/tickets' component={Tickets} />
    </>
  );
}

export default App;
