import { renderTabs } from '../tabs/tabs';

const tabsContainer = document.querySelector('.block-tabs');
const tabs = tabsContainer.querySelectorAll('.block-tabs__button');
const accordions = document.querySelectorAll('.accordion');
const accordionButtons = document.querySelectorAll('.accordion button');

accordionButtons.forEach((button, index) => {
  if (index === 0 || index % 4 === 0) {
    button.setAttribute('aria-expanded', true);
  } else {
    button.setAttribute('aria-expanded', false);
  }
});

tabs[0].setAttribute('aria-selected', true);

renderTabs(tabsContainer, tabs);

document.addEventListener('block-tabs', (event) => {
  accordions.forEach((content) => {
    content.classList.toggle('accordion--show', content.id === event.detail);
  });
});

accordionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', !expanded);
  });
});
