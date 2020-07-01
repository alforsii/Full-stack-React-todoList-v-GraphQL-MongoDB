import React, { useEffect } from 'react';
import M from 'materialize-css';

export default function ImageSlider() {
  useEffect(() => {
    console.log('collapsible');
    const slider = document.querySelectorAll('.slider');
    M.Slider.init(slider, {});
  }, []);

  return (
    <div>
      <div className="slider">
        <ul className="slides">
          {Array.from({ length: 5 }).map((elem, i) => (
            <li key={i}>
              <img
                src={`https://lorempixel.com/580/250/nature/${i + 1}`}
                alt="random-img"
              />
              <div
                className={`caption ${
                  i % 3 === 0
                    ? 'center-align'
                    : i % 2 === 0
                    ? 'left-align'
                    : 'right-align'
                }`}
              >
                <h3>This is our big Tagline!</h3>
                <h5 className="light grey-text text-lighten-3">
                  Here's our small slogan.
                </h5>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
