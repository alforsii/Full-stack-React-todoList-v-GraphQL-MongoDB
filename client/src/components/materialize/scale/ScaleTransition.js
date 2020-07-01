import React from 'react';

export default function Carousel() {
  const toggleScale = (e) => {
    document.getElementById('scale-demo').classList.toggle('scale-out');
  };

  return (
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
          class="btn-floating btn-large scale-transition"
        >
          <i class="material-icons">add</i>
        </a>

        {/* <!-- Scaled out --> */}
        <a
          id="scale-demo"
          href="#!"
          class="btn-floating btn-large scale-transition scale-out"
        >
          <i class="material-icons">add</i>
        </a>
      </div>
    </div>
  );
}
