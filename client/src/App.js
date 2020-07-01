import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Todos from './components/todos/Todos';
import TodoDetails from './components/todos/TodoDetails';
import Materialize from './components/materialize/Materialize';
import Navbar from './components/materialize/navbar/Navbar';
import Carousel from './components/materialize/img/Carousel';
import TapTarget from './components/materialize/tapTarget/TapTarget';
import Collapsible from './components/materialize/card/Collapsible';
import ImageSlider from './components/materialize/img/ImageSlider';
import Materialboxed from './components/materialize/img/Materialboxed';
import CardImage from './components/materialize/card/CardImage';
import Video from './components/materialize/media/Video';
import Table from './components/materialize/table/Table';
import ScaleTransition from './components/materialize/scale/ScaleTransition';
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

          <Route exact path="/materialize/table" component={Table} />

          <Route exact path="/materialize/scale" component={ScaleTransition} />

          <Route
            exact
            strict
            path="/materialize/tap-target"
            component={TapTarget}
          />
          <Route
            exact
            strict
            path="/materialize/card/collapsible"
            component={Collapsible}
          />
          <Route
            exact
            strict
            path="/materialize/card/cardImage"
            component={CardImage}
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
          <Route
            exact
            strict
            path="/materialize/media/video"
            component={Video}
          />
        </Switch>
      </div>
    </div>
  );
};

export default App;
