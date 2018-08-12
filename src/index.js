const select = target => document.querySelector(target);
const selectAll = target => document.querySelectorAll(target);
const create = target => document.createElement(target);

class HandlerMain {
  constructor() {
    this.buttons = {
      login: null,
      register: null
    }
  }

  assignButtons() {
    this.buttons.login = select('#btn-login');
    this.buttons.register = select('#btn-register');
  }

  hideButton(button) {
    this.buttons[button].style.display = 'none';
  }

  showButton(button) {
    this.buttons[button].style.display = 'block';
  }
}

class HandlerAdmin {
  constructor() {
    this.btn = null;
    this.btnDiv = null;
    this.createButton();
  }

  createButton() {
    this.btn = create('a');
    this.btnDiv = create('div');
    this.btnDiv.appendChild(this.btn);
    this.btn.href = './admin';
    this.btn.innerText = 'Admin options';
  }

  placeElements(target) {
    select(target).appendChild(this.btnDiv);
  }
}

window.onload = () => {
  const handlerAdmin = new HandlerAdmin();
  const handlerMain = new HandlerMain();
  handlerAdmin.placeElements('#options-links');
  handlerMain.assignButtons();
}