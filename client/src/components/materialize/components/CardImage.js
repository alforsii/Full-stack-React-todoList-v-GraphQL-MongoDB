import React from 'react';

export default function CardImage() {
  return (
    <div className="col s12 m8 offset-m2 l6 offset-l3">
      <div className="card-panel grey lighten-5 z-depth-1">
        <div className="row valign-wrapper">
          <div className="col s2">
            <img
              src="https://lorempixel.com/250/250/nature/1"
              alt=""
              className="circle responsive-img"
            />
          </div>
          <div className="col s10">
            <span className="black-text">
              This is a square image. Add the "circle" class to it to make it
              appear circular.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
