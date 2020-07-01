import React from 'react';

export default function Buttons() {
  return (
    <div>
      <h4>Button</h4>
      <button className="btn">Button</button>
      <button className="btn white black-text">Button white</button>
      <button className="btn-large red ">Button large</button>
      <button className="btn-large waves-effect waves-light red ">
        Button large
      </button>
      <button className="btn-floating red ">
        <i className="material-icons">cloud</i>
      </button>
      <button className="btn-floating waves-effect waves-light red ">
        <i className="material-icons">menu</i>
      </button>
      <button className="btn-floating pulse waves-effect waves-light red ">
        <i className="material-icons">menu</i>
      </button>
    </div>
  );
}
