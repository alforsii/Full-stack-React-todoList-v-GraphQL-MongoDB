import M from 'materialize-css';

document.addEventListener('DOMContentLoaded', function () {
  // dropdown init
  const dropBtns = document.querySelectorAll('.dropdown-trigger');
  M.Dropdown.init(dropBtns, {});
});
