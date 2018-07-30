// Слпйдер

var carousel = document.getElementById('carousel');
var list = carousel.querySelector('ul');
var listElems = carousel.querySelectorAll('li');
var currentItem = carousel.querySelector('.visible');

var count = 0;
var nextItem;

document.querySelector('.arrow-prev').onclick = function() {
  // сдвиг предыдущая
  if (!count) {
    return;
  }
  currentItem.style.display = 'none';
  // currentItem.style.opacity = 0;
  // currentItem.classList.remove('slaider__animation_right');
  nextItem = currentItem.previousElementSibling;
  
  nextItem.style.display = 'list-item';
  // nextItem.classList.add('slaider__animation_left')
  // nextItem.style.opacity = 1;
  currentItem = nextItem;
  count--;
};

document.querySelector('.arrow-next').onclick = function() {
  // сдвиг следующая
  if (count == listElems.length - 1) {
    return;
  }
  currentItem.style.display = 'none';
  // currentItem.style.opacity = 0;
  // currentItem.classList.remove('slaider__animation_left');
  nextItem = currentItem.nextElementSibling;

  nextItem.style.display = 'list-item';
  // nextItem.classList.add('slaider__animation_right')
  // nextItem.style.opacity = 1;
  currentItem = nextItem;
  count++;
};


//  Модальное окно
var modal;
var modalOpen = document.getElementById('modal-button');

modalOpen.onclick = function() {

  modal = document.createElement('div')
  modal.classList.add('modal');

  modal.innerHTML = '<div class="modal__background"><div class="modal__container"><h2 class="modal__container_tittle"> Привет! </h1> <p class="modal__container_text"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, voluptatem. </p> <button class="modal__container_button" id="modal-buuton-close"> Button </button></div></div>'
  document.body.appendChild(modal);

  var modalClose = document.getElementById('modal-buuton-close');

  modalClose.onclick = function() {
    modal.classList.add('out');
    var remove = setTimeout(function() {
      document.body.removeChild(modal)
    }, 1000) 
  }
};
