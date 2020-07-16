const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const inputRef = document.querySelector('input.js-switch-input');
const body = document.querySelector('body');

const themeDark = function() {
  localStorage.setItem('theme', Theme.DARK);
  if (body.classList.contains(Theme.LIGHT)) {
    body.classList.replace(Theme.LIGHT, Theme.DARK);
  }
  body.classList.add(Theme.DARK);
};

const themeLight = function() {
  body.classList.replace(Theme.DARK, Theme.LIGHT);
  localStorage.setItem('theme', Theme.LIGHT);
};

const switchTheme = event => {
  if (event.target.checked) {
    themeDark();
  } else {
    themeLight();
  }
};

const themeSet = function() {
  if (localStorage.getItem('theme') !== null) {
    if (localStorage.getItem('theme') === Theme.LIGHT) {
      inputRef.checked = false;
      body.classList.add(Theme.LIGHT);
    }
    if (localStorage.getItem('theme') === Theme.DARK) {
      inputRef.checked = true;
      body.classList.add(Theme.DARK);
    }
  }
  body.classList.add(Theme.LIGHT);
};

inputRef.addEventListener('change', switchTheme);
document.addEventListener('DOMContentLoaded', themeSet);
