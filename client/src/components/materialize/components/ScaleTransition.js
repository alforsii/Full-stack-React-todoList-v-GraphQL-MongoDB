import React from 'react';

export default function Carousel() {
  const toggleScale = (e) => {
    document.getElementById('scale-demo').classList.toggle('scale-out');
  };
  const scaleForm = (e) => {
    document.getElementById('scale-form').classList.toggle('scale-out');
  };

  return (
    <div>
      <div className="row">
        <div className="col s6">
          <button onClick={toggleScale} className="btn blue">
            Toggle scale
          </button>
        </div>
        <div className="col s6">
          {/* <!-- Scaled in --> */}
          <a
            id="scale-demo"
            href="#!"
            className="btn-floating btn-large scale-transition"
          >
            <i className="material-icons">add</i>
          </a>

          {/* <!-- Scaled out --> */}
          {/* <a
          id="scale-demo"
          href="#!"
          className="btn-floating btn-large scale-transition scale-out"
        >
          <i className="material-icons">add</i>
        </a> */}
        </div>
      </div>

      <button onClick={scaleForm} className="btn red">
        Toggle form
      </button>
      <form id="scale-form" className="scale-transition ">
        <div className="row">
          <div className="col s12 m6 offset-m3">
            <div className="card-panel z-depth-5 ">
              <div className="row">
                <div className="input-field col s12 m10 offset-m1">
                  <h4>Signup</h4>
                </div>
                <div className="input-field col s12 m10 offset-m1">
                  <input id="first_name" type="text" className="validate" />
                  <label htmlFor="first_name">First Name</label>
                </div>
                <div className="input-field col s12 m10 offset-m1">
                  <input id="last_name" type="text" className="validate" />
                  <label htmlFor="last_name">Last Name</label>
                </div>
                <div className="col s6 offset-s4">
                  <button type="submit" className="btn blue">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
