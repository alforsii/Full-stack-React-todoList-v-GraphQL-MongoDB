import React from 'react';
import { Link } from 'react-router-dom';

export default function Materialize() {
  return (
    <>
      <h4 className="center-align">Materialize components</h4>
      <div className="divider"></div>
      <div className="container">
        <ul>
          <li className="">
            <Link to="/materialize/img/carousel">Carousel</Link>
          </li>
          <li className="">
            <Link to="/materialize/tap-target">Tap Target</Link>
          </li>
          <li className="">
            <Link to="/materialize/collapsible">Collapsible</Link>
          </li>
          <li className="">
            <Link to="/materialize/img/slider">Image Slider</Link>
          </li>
          <li className="">
            <Link to="/materialize/img/materialboxed">Materialboxed</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
