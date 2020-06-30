import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Todos from './components/todos/Todos';
import TodoDetails from './components/todos/TodoDetails';
import Materialize from './components/materialize/Materialize';
import Navbar from './components/materialize/navbar/Navbar';
import Carousel from './components/materialize/carousel/Carousel';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/todos" component={Todos} />
        <Route exact path="/todo/:id" component={TodoDetails} />
        <Route exact path="/materialize" component={Materialize} />

        <Route exact strict to="/materialize/carousel" component={Carousel} />
      </Switch>
    </div>
  );
};

export default App;
