import '../styles/index.scss';
import { about, work, education, projects} from './content';

const navElements = document.querySelectorAll('h3');

const showinfo = () => {
    document.querySelector('body').classList.toggle('night');
    document.querySelector('nav').classList.toggle('night');
    document.querySelector('aside').classList.toggle('night');
};

const showSection = (name) => {

  document.querySelector('aside').innerHTML = '';

  const text = document.createElement('section');

  text.id = name;

  if (name == 'about') {
    text.innerHTML = about;
  } else if (name == 'work') {
    text.innerHTML = work;
  } else if (name == 'education') {
    text.innerHTML = education;
  } else if (name == 'projects') {
    text.innerHTML = projects;
  }
  document.querySelector('aside').appendChild(text);
};

navElements.forEach(function(element) {
    element.addEventListener('click', (element) => showSection(element.target.id));
});

document.querySelector('.checkbox').addEventListener('click', showinfo);

window.addEventListener('DOMContentLoaded', () => {
  showSection("about");
});

