import './style.css';

const navBtn = document.querySelector('#menu'),
  menuBar = document.querySelector('[role="menuBar"]');

navBtn.addEventListener('click', () => {
  //parsed value of the "aria-expanded" attribute of the "navBtn"
  const isExpanded = JSON.parse(navBtn.getAttribute('aria-expanded'));

  //sets the "aria-expanded" of the "navBtn" to the opposite boolean value
  //if it's true make it false and vice versa
  navBtn.setAttribute('aria-expanded', !isExpanded);
  menuBar.classList.toggle('hidden');
  menuBar.classList.toggle('flex');
});
