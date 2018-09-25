const server = 'http://localhost:8080';

const select = target => document.querySelector(target);
const create = tag => document.createElement(tag);
const setText = (target, text) => select(target).innerText = text;

window.onload = () => {
  const displayCard = (card) => {
    setText('#card-name', card.name);
    setText('#card-desc', card.description);
    select('#card-img').src = card.image;
    select('#purchase').href = `${server}/purchase?card=${card.id}`;
    select('#reload').href = `${server}/refill?card=${card.id}`;
  }

  const assignCards = (cards) => {
    const selector = select('#card-selector');

    displayCard(cards.find(card => card.avaible));
    select('#card').removeChild(select('.loader-wrapper'));

    cards.forEach((card) => {
      console.log('card: ', card);
      if (card.avaible) {
        const option = create('option');
        option.innerText = card.name;
        selector.appendChild(option);
      }
    });

    selector.addEventListener('change', (evnt) => {
      const selectedCard = cards.find(card => card.name === evnt.target.value);

      if (selectedCard) {
        displayCard(selectedCard);
      }
    });
  };

  const cards = fetch(`${server}/cards`).then(res => (
    res.json().then(data => {
      assignCards(data.cards);
    })
  ));
};
