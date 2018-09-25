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
    const firstAvaible = cards.find(card => card.avaible);
    const loadr = select('.loader-wrapper');

    if (firstAvaible) {
      displayCard(firstAvaible);
      select('#card').removeChild(loadr);
    } else {
      loadr.innerHTML = null;
      loadr.appendChild(create('span')).innerText = 'Uh-oh! Looks like there are no avaible cards right now! :(';
    }

    cards.forEach((card) => {
      console.log('card: ', card);
      if (card.introduction) console.log('yuss');

      if (card.avaible) {
        const option = create('option');
        option.innerText = card.name;
        selector.appendChild(option);
      }
    });

    selector.addEventListener('change', (evnt) => {
      const selectedCard = cards.find(card => card.name === evnt.target.value);

      if (selectedCard) displayCard(selectedCard);
    });
  };

  const cards = fetch(`${server}/cards`).then(res => (
    res.json().then(data => {
      assignCards(data.cards);
    })
  ));
};
