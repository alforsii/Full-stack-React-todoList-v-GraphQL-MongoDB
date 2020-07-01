import React from 'react';

export default function Pagination() {
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.pagination-custom li button').forEach((btn) => {
      btn.addEventListener('click', () => {
        addClass();
        btn.classList.remove('btn-flat');
      });
    });
  });

  const addClass = () => {
    document.querySelectorAll('.pagination-custom li button').forEach((btn) => {
      if (!btn.classList.contains('btn-flat')) {
        btn.classList.add('btn-flat');
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
        <li className="active">
          <a href="#!">1</a>
        </li>
        <li className="waves-effect">
          <a href="#!">2</a>
        </li>
        <li className="waves-effect">
          <a href="#!">3</a>
        </li>
        <li className="waves-effect">
          <a href="#!">4</a>
        </li>
        <li className="waves-effect">
          <a href="#!">5</a>
        </li>
        <li className="waves-effect">
          <a href="#!">
            <i className="material-icons">chevron_right</i>
          </a>
        </li>
      </ul>
      <h4>Custom pagination</h4>
      <ul className="pagination pagination-custom">
        <button className="btn-floating btn-flat waves-effect white disabled">
          <i className="material-icons black-text">chevron_left</i>
        </button>
        {Array.from({ length: 5 }).map((el, i) => (
          <button
            key={i}
            className="btn-floating btn-flat waves-effect hover::red"
          >
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
