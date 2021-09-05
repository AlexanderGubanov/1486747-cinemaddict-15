import {createRankTemplate} from './view/rank.js';
import {createMenuTemplate} from './view/menu.js';
import {createCardTemplate} from './view/card.js';
import {createButtonTemplate} from './view/button.js';
import {createMoviesNumberTemplate} from './view/movies.js';
//import {createStatisticsTemplate} from './view/statistics.js';
import {createPopupTemplate} from './view/popup.js';

const FILMS_NUMBER = 5;

const renderComponent = (container, template, position) => {
  container.insertAdjacentHTML (position, template);
};

const siteHeaderElement = document.querySelector('.header');
renderComponent(siteHeaderElement, createRankTemplate(), 'beforeend');

const siteMainElement = document.querySelector('.main');
renderComponent(siteMainElement, createMenuTemplate(), 'beforeend');

const films = document.createElement('section');
siteMainElement.appendChild(films);
films.classList.add('films');
const filmsList = document.createElement('div');
films.appendChild(filmsList);
filmsList.classList.add('films-list');
const filmListContainer = document.createElement('div');
filmsList.appendChild(filmListContainer);
filmListContainer.classList.add('films-list__container');

for (let i = 0; i < FILMS_NUMBER; i++) {
  renderComponent(filmListContainer, createCardTemplate(), 'beforeend');
}

renderComponent(siteMainElement, createButtonTemplate(), 'beforeend');

//renderComponent(siteMainElement, createStatisticsTemplate(), 'beforeend');

const siteFooterElement = document.querySelector('.footer');
const siteFooterStatisticsElement = siteFooterElement.querySelector('.footer__statistics');
renderComponent(siteFooterStatisticsElement, createMoviesNumberTemplate(), 'beforeend');

renderComponent(siteMainElement, createPopupTemplate(), 'beforeend');
