const select = target => document.querySelector(target);
const selectAll = target => document.querySelectorAll(target);
const create = target => document.createElement(target);

class Handler {
  constructor() {
    this.buttons = {
      login: select('#btn-login'),
      register: select('#btn-register'),
      admin : this.createAdminButton(),
    }
  }

  createAdminButton() {
    const anchor = create('a');
    anchor.href = './admin';
    anchor.innerText = 'Admin options';
    return anchor;
  }

  hideButton(button) {
    this.buttons[button].style.display = 'none';
  }

  showButton(button) {
    this.buttons[button].style.display = 'block';
  }

  placeElement(parent, child, div = false) {
    div ? select(parent).appendChild(create('div')).appendChild(child) : select(parent).appendChild(child);
  }
}

window.onload = () => {
  const handler = new Handler();
  handler.placeElement('#options-links', handler.buttons.admin, true);
}