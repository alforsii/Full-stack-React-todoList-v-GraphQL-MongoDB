import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Carousel from './carousel/Carousel';

export default function Materialize() {
  return (
    <>
      <h4 className="center-align">Materialize</h4>
      <div className="divider"></div>
      <div className="container">
        <Link to="/materialize/carousel">Carousel</Link>
      </div>
    </>
  );
}
