import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Todos from './components/todos/Todos';
import TodoDetails from './components/todos/TodoDetails';
import Materialize from './components/materialize/Materialize';
import Navbar from './components/materialize/components/navbar/Navbar';
import Carousel from './components/materialize/components/Carousel';
import TapTarget from './components/materialize/components/TapTarget';
import Collapsible from './components/materialize/components/Collapsible';
import ImageSlider from './components/materialize/components/ImageSlider';
import Materialboxed from './components/materialize/components/Materialboxed';
import CardImage from './components/materialize/components/CardImage';
import Video from './components/materialize/components/Video';
import Table from './components/materialize/components/Table';
import ScaleTransition from './components/materialize/components/ScaleTransition';
import Typography from './components/materialize/components/Typography';
import Grid from './components/materialize/components/Grid';
import Buttons from './components/materialize/components/Buttons';
import FloatingAction from './components/materialize/components/FloatingAction';
import Collections from './components/materialize/components/Collections';
import Pagination from './components/materialize/components/Pagination';
import './App.css';

const App = () => {
  const base = '/materialize';
  return (
    <div className="App">
      <Navbar />
      <br />
      <div className="container">
        <Switch>
          <Route exact path="/todos" component={Todos} />
          <Route exact path="/todo/:id" component={TodoDetails} />

          <Route exact path={base} component={Materialize} />
          <Route exact path={`${base}/table`} component={Table} />
          <Route exact path={`${base}/scale`} component={ScaleTransition} />
          <Route exact path={`${base}/typography`} component={Typography} />
          <Route exact path={`${base}/grid`} component={Grid} />
          <Route exact path={`${base}/buttons`} component={Buttons} />
          <Route exact path={`${base}/floating`} component={FloatingAction} />
          <Route exact path={`${base}/collections`} component={Collections} />
          <Route exact path={`${base}/tapTarget`} component={TapTarget} />
          <Route exact path={`${base}/collapsible`} component={Collapsible} />
          <Route exact path={`${base}/cardImage`} component={CardImage} />
          <Route exact path={`${base}/carousel`} component={Carousel} />
          <Route exact path={`${base}/slider`} component={ImageSlider} />
          <Route exact path={`${base}/video`} component={Video} />
          <Route exact path={`${base}/pagination`} component={Pagination} />
          <Route
            exact
            path={`${base}/materialboxed`}
            component={Materialboxed}
          />
        </Switch>
      </div>
    </div>
  );
};

export default App;
