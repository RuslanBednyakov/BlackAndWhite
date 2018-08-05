// Slider

const carousel = document.getElementById('carousel');
const list = carousel.querySelector('ul');
const listElems = carousel.querySelectorAll('li');

let currentItem = carousel.querySelector('.visible');
let count = 0;
let nextItem;

function prevSlide() {
  // Previous slide
  if (!count) {
    return;
  }
  currentItem.style.display = 'none';
  nextItem = currentItem.previousElementSibling;
  
  nextItem.style.display = 'list-item';
  currentItem = nextItem;
  count--;
};

document.querySelector('.arrow-prev').addEventListener("click", prevSlide);

function nextSlide() {
  // Next slide
  if (count == listElems.length - 1) {
    return;
  }
  currentItem.style.display = 'none';
  nextItem = currentItem.nextElementSibling;

  nextItem.style.display = 'list-item';
  currentItem = nextItem;
  count++;
};

document.querySelector('.arrow-next').addEventListener("click", nextSlide);


//  Modal window
const modalOpen = document.getElementById('modal-button');
let modal;

function moadalRemove() {
  modal.classList.add('out');
  const remove = setTimeout(function() {
    document.body.removeChild(modal)
  }, 1000) 
};

function moadalCreate() {

  const fragment = document.createDocumentFragment();

  // modal.innerHTML = '<div class="modal__background">
  //                      <div class="modal__container">
  //                        <h2 class="modal__container_tittle"> Привет! </h2> 
  //                        <p class="modal__container_text"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, voluptatem. </p> 
  //                        <button class="modal__container_button" id="modal-buuton-close"> Button </button>
  //                      </div>
  //                    </div>'

  modal = document.createElement('div')
  modal.classList.add('modal');
  fragment.appendChild(modal);

  const modalBackground = document.createElement('div');
  modalBackground.classList.add('modal__background');
  modal.appendChild(modalBackground);

  const modalContainer = document.createElement('div');
  modalContainer.classList.add('modal__container');
  modalBackground.appendChild(modalContainer);

  const modalContainerTittle = document.createElement('h2');
  modalContainerTittle.classList.add('modal__container_tittle');
  modalContainerTittle.appendChild(document.createTextNode('Hello!'));
  modalContainer.appendChild(modalContainerTittle);
  

  const modalContainerText = document.createElement('p');
  modalContainerText.classList.add('modal__container_text');
  modalContainerText.appendChild(document.createTextNode('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, voluptatem.'));
  modalContainer.appendChild(modalContainerText);

  const modalContainerButton = document.createElement('button');
  modalContainerButton.classList.add('modal__container_button');
  modalContainerButton.setAttribute('id', 'modal-buuton-close')
  modalContainerButton.appendChild(document.createTextNode('Close'));
  modalContainer.appendChild(modalContainerButton);


  document.body.appendChild(fragment);

  const modalClose = document.getElementById('modal-buuton-close');

  modalClose.addEventListener("click", moadalRemove);
};

modalOpen.addEventListener("click", moadalCreate);
