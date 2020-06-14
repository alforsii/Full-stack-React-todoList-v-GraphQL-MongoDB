import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Todos from './components/todos/Todos';
import TodoDetails from './components/todos/TodoDetails';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Todos} />
        <Route exact path="/todo/:id" component={TodoDetails} />
      </Switch>
    </div>
  );
};

export default App;
