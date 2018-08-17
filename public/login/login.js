window.onload = () => {
  const un = document.querySelector('#username');
  const pw = document.querySelector('#password');
  const show = document.querySelector('img');
  
  document.querySelector('form').addEventListener('click', event => {
    switch (event.target) {
      case document.querySelector('#submit'):
        if (un.value && pw.value) {
          event.preventDefault();
          window.location.replace('http://localhost:8080');
        }
        break;
      case show:
        if (pw.type === 'password') {
          pw.type = 'text';
          show.src = 'https://cdn3.iconfinder.com/data/icons/show-and-hide-password/100/show_hide_password-08-512.png';
        } else {
          pw.type = 'password';
          show.src = 'https://cdn3.iconfinder.com/data/icons/show-and-hide-password/100/show_hide_password-07-512.png';
        }
        break;
    }
  });
}
