const server = 'http://localhost:8080';

const select = target => document.querySelector(target);
const create = tag => document.createElement(tag);

window.onload = () => {
  const assignCards = (cards) => {
    const selector = select('#card-selector');
    cards.forEach((card) => {
      selector.appendChild(create('option')).innerText = card.name;
    });
  };

  const cards = fetch(`${server}/cards`).then(res => (
    res.json().then(data => {
      assignCards(data.cards);
    })
  ));
};
