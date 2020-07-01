import React from 'react';

export default function Grid() {
  return (
    <div className="container">
      {/* <!-- Page Content goes here --> */}
      <h4>Container with .row class</h4>

      <hr />
      <div className="row valign-wrapper">
        <div className="col s2 offset-s5">
          <img
            src="https://lorempixel.com/250/250/nature/1"
            alt=""
            className="circle responsive-img"
          />
        </div>
        <p>Image and text centered horizontal and vertically</p>
      </div>
      <div className="row">
        {Array.from({ length: 12 }).map((el, i) => (
          <div className="col s1" key={i}>
            <div className="blue p-3 center-align">{i + 1}</div>
          </div>
        ))}
      </div>
      <div className="row">
        <div className="col s12 ">
          <div className="flow-text red">
            This div is 12-columns wide on all screen sizes
          </div>
        </div>
        <div className="col s6 offset-s6 ">
          <div className="flow-text red">6-columns (offset-by-6)</div>
        </div>
        <div className="col s6 offset-s4 ">
          <div className="flow-text red">6-columns (offset-by-4)</div>
        </div>
        <div className="col s8 offset-s2">
          <div className="blue">col s8 offset-s2 inside row div</div>
          <div className="blue">centered by both side offset 2</div>
        </div>
      </div>
      <h4>Container without .row class</h4>
      <hr />
      <div>
        {Array.from({ length: 12 }).map((el, i) => (
          <div className="col s1" key={i}>
            <div className="blue p-3">{i + 1}</div>
          </div>
        ))}
      </div>
      <div>
        <div className="col s12 ">
          <div className="flow-text red">
            This div is 12-columns wide on all screen sizes
          </div>
        </div>
        <div className="col s6 offset-s6 ">
          <div className="flow-text red">6-columns (offset-by-6)</div>
        </div>
        <div className="col s6 offset-s4 ">
          <div className="flow-text red">6-columns (offset-by-4)</div>
        </div>
      </div>
      <div className="col s8 offset-s2">
        <div className="blue">col s8 offset-s2 outside row div</div>
      </div>
    </div>
  );
}
