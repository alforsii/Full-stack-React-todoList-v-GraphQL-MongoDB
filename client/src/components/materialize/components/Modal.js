import React, { useEffect } from 'react';
import M from 'materialize-css';

export default function Modal() {
  useEffect(() => {
    const modals = document.querySelectorAll('.modal');
    M.Modal.init(modals, {});
  });
  return (
    <div>
      {/* <!-- Modal Trigger --> */}
      <a className="waves-effect waves-light btn modal-trigger" href="#modal1">
        Modal
      </a>
      {/* with button trigger */}
      {/* <button data-target="modal1" class="btn modal-trigger">
        Modal
      </button> */}

      {/* <!-- Modal Structure --> */}
      <div id="modal1" className="modal">
        <div className="container">
          <div className="modal-content">
            <h4>Modal Header</h4>
            <div className="divider"></div>
            <div className="row">
              <div className="input-field s12">
                <input
                  className="validate"
                  id="title"
                  type="text"
                  autoFocus={true}
                />
                <label htmlFor="title">Title</label>
              </div>
              <div className="input-field s12">
                <input type="text" id="description" className="validate" />
                <label htmlFor="description">Description</label>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <a
            href="#!"
            className="modal-close waves-effect waves-green btn-flat"
          >
            Cancel
          </a>
          <a
            href="#!"
            className="modal-close waves-effect waves-green btn-flat"
          >
            Agree
          </a>
        </div>
      </div>
    </div>
  );
}
