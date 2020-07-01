import React from 'react';
import { Link } from 'react-router-dom';

export default function Materialize() {
  return (
    <>
      <h4 className="center-align">Materialize components</h4>
      <div className="divider"></div>
      <div className="container">
        <ul>
          <li>
            <Link to="/materialize/img/carousel">Carousel</Link>
          </li>
          <li>
            <Link to="/materialize/tap-target">Tap Target</Link>
          </li>
          <li>
            <Link to="/materialize/card/collapsible">Collapsible</Link>
          </li>
          <li>
            <Link to="/materialize/card/cardImage">Card image</Link>
          </li>
          <li>
            <Link to="/materialize/img/slider">Image Slider</Link>
          </li>
          <li>
            <Link to="/materialize/img/materialboxed">Materialboxed</Link>
          </li>
          <li>
            <Link to="/materialize/media/video">Responsive video</Link>
          </li>
          <li>
            <Link to="/materialize/table">Table</Link>
          </li>
          <li>
            <Link to="/materialize/scale">Scaled transition</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
