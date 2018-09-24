'use strict';

const server = 'http://localhost:8080';
const select = target => document.querySelector(target);
const create = tag => document.createElement(tag);
const appendNew = ( target, tag, text ) => select(target).appendChild(create(tag)).innerText = text;

window.onload = () => {
  const cards = fetch(`${server}/cards`).then(res => (
    res.json().then(data => data)
  ));

  select('#selector').addEventListener('click', () => {
    console.log(cards);
  });

  const http = new XMLHttpRequest();
  const button = create('button')
  http.open('get', 'http://localhost:8080/cards', true);
  http.onload = () => {
    const res = JSON.parse(http.responseText);
    res.cards.forEach(card => {
      console.log(card);
      select('#selector').appendChild(create('option')).innerText = card.name;
    });

    if (selector.innerText == 'introduction') {
      res.cards.forEach(element => {
        appendNew('#cardForm', 'input', element.name);
        appendNew('#cardForm', 'input', element.image);
        appendNew('#cardForm', 'input', element.description);
      });
    } else {
      res.cards.forEach(element => {
        appendNew('#IntroductionForm', 'input', element.name);
        appendNew('#IntroductionForm', 'input', element.image);
        appendNew('#IntroductionForm', 'input', element.description);
        appendNew('#cardForm', 'input', element.avaible);
      });
    }
    select('#cardForm').appendChild(button).innerText = 'Submit';
  }

  button.addEventListener('click', (e) => {
    const http2 = new XMLHttpRequest();
    http2.open('POST', 'http://localjost:8080/admin/add', true);
    if (selector.value == 'card') {
      const input = selectAll('input');
      let x = {
        name: input[0].value,
        image: input[1].value,
        description: input[2].value,
        avalable: input[3].value
      }
    } else {
      let x = {
        name: input[0].value,
        image: input[1].value,
        description: input[2].value,
      }
    }
    http2.send(JSON.stringify(x))
  });
  http.send();
}
