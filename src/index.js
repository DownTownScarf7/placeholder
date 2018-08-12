const select = target => document.querySelector(target);
const selectAll = target => document.querySelectorAll(target);
const create = target => document.createElement(target);

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
  handlerAdmin.placeElements('#options-links');
}