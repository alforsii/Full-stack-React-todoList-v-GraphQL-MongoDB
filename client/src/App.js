import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Todos from './components/todos/Todos';
import TodoDetails from './components/todos/TodoDetails';
import Materialize from './components/materialize/Materialize';
import Navbar from './components/materialize/navbar/Navbar';
import Carousel from './components/materialize/carousel/Carousel';
import TapTarget from './components/materialize/tapTarget/TapTarget';
import Collapsible from './components/materialize/collaspsible/Collapsible';
import ImageSlider from './components/materialize/slider/ImageSlider';
import Materialboxed from './components/materialize/materialboxed/Materialboxed';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <br />
      <div className="container">
        <Switch>
          <Route exact path="/todos" component={Todos} />
          <Route exact path="/todo/:id" component={TodoDetails} />
          <Route exact path="/materialize" component={Materialize} />

          <Route
            exact
            strict
            path="/materialize/collapsible"
            component={Collapsible}
          />
          <Route
            exact
            strict
            path="/materialize/tap-target"
            component={TapTarget}
          />
          <Route
            exact
            strict
            path="/materialize/img/carousel"
            component={Carousel}
          />
          <Route
            exact
            strict
            path="/materialize/img/slider"
            component={ImageSlider}
          />
          <Route
            exact
            strict
            path="/materialize/img/materialboxed"
            component={Materialboxed}
          />
        </Switch>
      </div>
    </div>
  );
};

export default App;
