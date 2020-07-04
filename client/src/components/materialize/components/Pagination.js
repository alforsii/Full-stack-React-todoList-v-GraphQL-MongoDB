import React, { useEffect } from 'react';

export default function Pagination() {
  useEffect(() => {
    document
      .querySelectorAll('.pagination-custom button')
      .forEach((btn, i, arr) => {
        btn.addEventListener('click', () => {
          addClass('btn-flat', '.pagination-custom button');
          if (i > 0 && i < arr.length - 1) {
            btn.classList.remove('btn-flat');
          }
        });
      });

    document.querySelectorAll('.pagination li').forEach((btn, i, arr) => {
      btn.addEventListener('click', () => {
        removeClass('active', '.pagination li');
        if (i > 0 && i < arr.length - 1) {
          btn.classList.add('active');
        }
      });
    });
  });

  const addClass = (name, target) => {
    document.querySelectorAll(target).forEach((btn) => {
      if (!btn.classList.contains(name)) {
        btn.classList.add(name);
      }
    });
  };
  const removeClass = (name, target) => {
    document.querySelectorAll(target).forEach((btn) => {
      if (btn.classList.contains(name)) {
        btn.classList.remove(name);
      }
    });
  };
  return (
    <div>
      <ul className="pagination">
        <li className="disabled">
          <a href="#!">
            <i className="material-icons">chevron_left</i>
          </a>
        </li>
        {Array.from({ length: 5 }).map((_, i) => (
          <li key={i} className={`${i === 0 ? 'active' : 'waves-effect'}`}>
            <a href="#!"> {i + 1}</a>
          </li>
        ))}
        <li className="waves-effect">
          <a href="#!">
            <i className="material-icons">chevron_right</i>
          </a>
        </li>
      </ul>

      <h4>Custom pagination</h4>
      <ul className="pagination pagination-custom">
        <button className="btn-floating btn-flat waves-effect white disabled">
          <i className="material-icons grey-text lighten-5">chevron_left</i>
        </button>
        {Array.from({ length: 5 }).map((_, i) => (
          <button key={i} className="btn-floating btn-flat waves-effect">
            {i + 1}
          </button>
        ))}
        <button className="btn-floating btn-flat waves-effect white">
          <i className="material-icons black-text">chevron_right</i>
        </button>
      </ul>
    </div>
  );
}
