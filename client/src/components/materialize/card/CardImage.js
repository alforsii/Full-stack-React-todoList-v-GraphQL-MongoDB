import React from 'react';

export default function CardImage() {
  return (
    <div class="col s12 m8 offset-m2 l6 offset-l3">
      <div class="card-panel grey lighten-5 z-depth-1">
        <div class="row valign-wrapper">
          <div class="col s2">
            <img
              src="https://lorempixel.com/250/250/nature/1"
              alt=""
              class="circle responsive-img"
            />
          </div>
          <div class="col s10">
            <span class="black-text">
              This is a square image. Add the "circle" class to it to make it
              appear circular.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
