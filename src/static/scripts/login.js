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
          show.src = '/static/images/eye_crossed.png';
        } else {
          pw.type = 'password';
          show.src = '/static/images/eye.png';
        }
        break;
    }
  });
}
