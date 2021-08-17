import './App.css';
import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

// useContext
import { UserContext } from './useContext';

// components
import Chat from './components/chat/Chat';
import Home from './components/home/Home';

const App = () => {
  // state
  const [user, setUser] = useState(null);
  return (
    <Router>
      <div className='App'>
        <UserContext.Provider
          value={{ user, setUser }}
        >
          <Switch>
            <Route exact path='/' component={Home} />
            <Route
              exact
              path='/chat'
              component={Chat}
            />
          </Switch>
        </UserContext.Provider>
      </div>
    </Router>
  );
};

export default App;
