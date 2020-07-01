import React from 'react';

export default function Collections() {
  return (
    <div>
      <ul className="collection">
        <li className="collection-item avatar">
          <img
            src="https://lorempixel.com/250/250/nature/1"
            alt=""
            className="circle"
          />
          <span className="title">Title</span>
          <p>
            First Line <br />
            Second Line
          </p>
          <a href="#!" className="secondary-content">
            <i className="material-icons">grade</i>
          </a>
        </li>
        <li className="collection-item avatar">
          <i className="material-icons circle">folder</i>
          <span className="title">Title</span>
          <p>
            First Line <br />
            Second Line
          </p>
          <a href="#!" className="secondary-content">
            <i className="material-icons">grade</i>
          </a>
        </li>
        <li className="collection-item avatar">
          <i className="material-icons circle green">insert_chart</i>
          <span className="title">Title</span>
          <p>
            First Line <br />
            Second Line
          </p>
          <a href="#!" className="secondary-content">
            <i className="material-icons">grade</i>
          </a>
        </li>
        <li className="collection-item avatar">
          <i className="material-icons circle red">play_arrow</i>
          <span className="title">Title</span>
          <p>
            First Line <br />
            Second Line
          </p>
          <a href="#!" className="secondary-content">
            <i className="material-icons">grade</i>
          </a>
        </li>
      </ul>
      <hr />
      <ul className="collection with-header">
        <li className="collection-header">
          <h4>First Names</h4>
        </li>
        <li className="collection-item">
          <div>
            Alvin
            <a href="#!" className="secondary-content">
              <i className="material-icons">send</i>
            </a>
          </div>
        </li>
        <li className="collection-item">
          <div>
            Alvin
            <a href="#!" className="secondary-content">
              <i className="material-icons">send</i>
            </a>
          </div>
        </li>
        <li className="collection-item">
          <div>
            Alvin
            <a href="#!" className="secondary-content">
              <i className="material-icons">send</i>
            </a>
          </div>
        </li>
        <li className="collection-item">
          <div>
            Alvin
            <a href="#!" className="secondary-content">
              <i className="material-icons">send</i>
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}
