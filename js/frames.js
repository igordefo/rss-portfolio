const frame = document.querySelector('.wrapper');

const mobile = document.querySelector('.mobile');
const desktop = document.querySelector('.desktop');

const width = document.querySelector('.wrapper').offsetWidth;

if (width > 767) {
  mobile.addEventListener('click', function() {
    console.log('click');
    frame.style.width = '450px';
    mobile.style.display = 'none';
    desktop.style.display = 'block';
  });

  desktop.addEventListener('click', function() {
    frame.style.width = '100%';
    mobile.style.display = 'block';
    desktop.style.display = 'none';
  });
}
