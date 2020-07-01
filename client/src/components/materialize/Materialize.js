import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default function Materialize() {
  const links = [
    { name: 'Carousel', url: '/materialize/carousel' },
    { name: 'Tap Target', url: '/materialize/tapTarget' },
    { name: 'Collapsible', url: '/materialize/collapsible' },
    { name: 'Card image', url: '/materialize/cardImage' },
    { name: 'Image Slider', url: '/materialize/slider' },
    { name: 'Materialboxed', url: '/materialize/materialboxed' },
    { name: 'Responsive video', url: '/materialize/video' },
    { name: 'Table', url: '/materialize/table' },
    { name: 'Scaled transition', url: '/materialize/scale' },
    { name: 'Typography', url: '/materialize/typography' },
    { name: 'Grid', url: '/materialize/grid' },
    { name: 'Buttons', url: '/materialize/buttons' },
    { name: 'Collections', url: '/materialize/collections' },
    { name: 'Floating actions', url: '/materialize/floating' },
    { name: 'Pagination', url: '/materialize/pagination' },
  ];
  return (
    <>
      <h4 className="center-align">Materialize components</h4>
      <button className="btn red m4">Remove</button>
      <button className="btn red ">Remove</button>
      <h4 className="truncate">
        This is an extremely long title that will be truncated
      </h4>

      <div className="divider"></div>
      <div className="container">
        <ul>
          {links
            .sort((a, b) => (a.name > b.name ? 1 : -1))
            .map((link) => (
              <li key={link.url}>
                <Link to={link.url}>{link.name}</Link>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
