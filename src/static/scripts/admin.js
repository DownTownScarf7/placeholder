'use strict';

// window.onload() = {
//   connect to endpoint to get all cards
//   forEeach of those cards create a<option>
//   when someone selects that option, connect to DB to get card info
//   load info
// }

const http = new XMLHttpRequest();
let button = document.createElement('button')
http.open('get', 'http://localhost:8080/admin', true);
http.onload = () => {
  const res = JSON.parse(http.responseText);
  document.querySelector('#selector').forEach(element => {
    document.querySelector('#selector').appendChild(document.createElement('option')).innerText = res.value
  });

  if (selector.innerText == 'introduction') {
    res.rows.forEach(element => {
      document.querySelector('#cardForm').appendChild(document.createElement('input')).innerText = element.name;
      document.querySelector('#cardForm').appendChild(document.createElement('input')).innerText = element.image;
      document.querySelector('#cardForm').appendChild(document.createElement('input')).innerText = element.description;
    });
  } else {
    res.rows.forEach(element => {
      document.querySelector('#IntroductionForm').appendChild(document.createElement('input')).innerText = element.name;
      document.querySelector('#IntroductionForm').appendChild(document.createElement('input')).innerText = element.image;
      document.querySelector('#IntroductionForm').appendChild(document.createElement('input')).innerText = element.description;
      document.querySelector('#cardForm').appendChild(document.createElement('input')).innerText = element.avalable;

    });
  }
  cardForm.appendChild(button).innerText = 'Submit';
}

button.addEventListener('click', (e) => {
  const http2 = new XMLHttpRequest();
  http2.open('POST', 'http://localjost:8080/admin/add', true);
  if (selector.value == 'card') {
    const input = document.querySelectorAll('input');
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
