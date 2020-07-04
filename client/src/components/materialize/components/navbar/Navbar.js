import React from 'react';
import './init';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar-fixed">
      <nav className="blue">
        <div className="container">
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo">
              Logo
            </Link>
            <ul className="right hide-on-sm-and-down">
              <li>
                <Link to="/todos">Todos</Link>
              </li>
              <li>
                <Link to="/infinite-scroll">Infinite_Scroll</Link>
              </li>
              <li>
                <Link to="/materialize">Materialize</Link>
              </li>
              {/* <!-- Dropdown Trigger --> */}
              <li>
                <a
                  className="dropdown-trigger"
                  href="#!"
                  data-target="dropdown1"
                >
                  Dropdown
                  <i className="material-icons right">arrow_drop_down</i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <!-- Dropdown Structure --> */}
      <ul id="dropdown1" className="dropdown-content">
        <li>
          <a href="#!">one</a>
        </li>
        <li>
          <a href="#!">two</a>
        </li>
        <li className="divider"></li>
        <li>
          <a href="#!">three</a>
        </li>
      </ul>
    </div>
  );
}
