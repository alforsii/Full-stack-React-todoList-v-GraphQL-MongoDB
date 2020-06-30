import React, { useEffect } from 'react';
import M from 'materialize-css';

export default function TapTarget() {
  useEffect(() => {
    const tapTarget = document.querySelectorAll('.tap-target');
    M.TapTarget.init(tapTarget, {});
  }, []);

  const openTap = (e) => {
    const tapTarget = document.querySelectorAll('.tap-target');
    // const instance = M.TapTarget.getInstance(tapTarget);
    M.TapTarget.init(tapTarget, {});
  };
  return (
    <div>
      <div className="fixed-action-btn" style={{ left: 20 }}>
        <button
          id="menu"
          onClick={openTap}
          className="waves-effect waves-light btn btn-floating"
        >
          <i className="material-icons">menu</i>
        </button>
      </div>

      {/* <!-- Tap Target Structure --> */}
      <div className="tap-target" data-target="menu">
        <div className="tap-target-content">
          <h5>Title</h5>
          <p>A bunch of text</p>
        </div>
      </div>
    </div>
  );
}
