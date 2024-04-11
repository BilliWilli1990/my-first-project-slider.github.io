const resultTitle = document.querySelector('#resultTitle');
const typeBtn = document.querySelector('#typeBtn');
const resultBtn = document.querySelector('#resultBtn');
const clearBtn = document.querySelector('#clearBtn');
const inputTitle = document.getElementById('inputTitle');
const dateTitle = document.getElementById('dateTitle');
const dateBtn = document.getElementById('dateBtn');
const timeTitle = document.getElementById('timeTitle');
const output = document.getElementById('output');
const sliderNav = document.querySelector('#sliderNav');
const buttons = sliderNav.querySelectorAll('nav.slider-nav > a');
const sliderSection = document.getElementById('sliderSection');
const preview = document.getElementById('preview');
const buttonset = document.getElementById('buttonset');
let current = buttons[0];
let dateX = new Date().toLocaleDateString();
let currentSlider = 0;

/*

typeBtn.addEventListener('click', resultSumm);

function numBtn(j) {
  j = Math.floor(j * 2.54);
  return j;
}

let x;
let y;

function resultSumm() {
  x = prompt('Величина в дюймах', 0).replace(',', '.');
  if (x == 0) {
    y = 'Введите число больше нуля';
  } else if (x < 0) {
    y = 'Величина не может быть отрицательной';
  } else {
    y = numBtn(x);
  }
  return y;
}

resultBtn.addEventListener('click', result);
function result() {
  inputTitle.innerHTML = x;
  resultTitle.innerHTML = y;
}

clearBtn.addEventListener('click', clearSumm);
function clearSumm() {
  resultTitle.innerHTML = '';
  inputTitle.innerHTML = '';
  dateTitle.innerHTML = '';
}

dateBtn.addEventListener('click', dateFormatbtn);
function dateFormatbtn() {
  dateTitle.innerHTML = `Сегодняшняя дата: ${dateX}`;
}

*/

let myVar = setTimeout(function tick() {
  myVar = setTimeout(tick, 1000);
  let dateY = new Date();
  timeTitle.innerHTML = dateY.toLocaleTimeString();
}, 1000);

function imageOutput(btn) {
  output.src = btn.href;
  buttons.forEach((el) => {
    if (el == btn) {
    el.className = 'active';
    }
    else {
    el.className = '';
  }
  });
}

function showImage(evt) {
  if (evt.target != this) {
    current = evt.target;
    output.src = evt.target.href;
    buttons.forEach((el) => {
      if (el == evt.target) {
        el.className = `active`;
      } else {
        el.className = '';
      }
      evt.preventDefault();
    });
  }
}

/*buttons.forEach((el) => {
  el.addEventListener('click', showImage);
  el.addEventListener('mouseover', showPreview);
  el.addEventListener('mouseout', hidePreview);
});*/

/*
function showPreview(evt) {
  if (evt.target != this) {
    preview.style.left = evt.pageX + 'px';
    preview.style.top = evt.pageY + 'px';
    preview.style.backgroundImage = 'url(' + evt.target.href + ')';
    preview.className = 'active';
  }
}


function hidePreview(evt) {
  if (evt.target != this) {
    preview.className = '';
  }
}
*/

function banOutput() {}

buttonset.addEventListener('click', showImage);
/*
buttonset.addEventListener('mouseover', showPreview);
buttonset.addEventListener('mouseout', hidePreview);
*/
output.addEventListener('contextmenu', (evt) => {
  evt.preventDefault();
});
buttonset.addEventListener(
  'mouseover',
  (evt) => {
    if (evt.target != this && evt.target == current) evt.stopPropagation();
  },
  true
);

window.document.body.onkeydown = (evt) => {
  let i, currentIndex;
  for (i = 0; i < buttons.length; ++i)
    if (buttons[i] == current) {
      currentIndex = i;
      break;
    }
  switch (evt.which) {
    case 37:
      if (currentIndex == 0) current = buttons[buttons.length - 1];
      else current = buttons[currentIndex - 1];
      imageOutput(current);
      break;
    case 39:
      if (currentIndex == buttons.length - 1) current = buttons[0];
      else current = buttons[currentIndex + 1];
      imageOutput(current);
      break;
  }
};

var swiper = new Swiper('.mySwiper', {
  loop: true,
  effect: 'cube',
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
});

let imgSet = document.querySelector('.swiper-wrapper');

imgSet.addEventListener('contextmenu', (evt) => {
  evt.preventDefault();
});


/*
const container = document.getElementById('container');
const scrollbar = document.getElementById('scrollbar');
const handle = scrollbar.firstElementChild;
let lastPos = 0;

function mMove(evt) {
  let d = evt.clientY - lastPos;
  let y = this.offsetTop + d,
    cy;
  if (y > 0 && y < 262) {
    this.style = 'top:' + y + 'px';
    cy = ((container.scrollHeight - container.clientHeight) * y) / 262;
    container.scrollTop = cy;
    lastPos = evt.clientY;
  }
}

function mUp(evt) {
  this.removeEventListener('mousemove', mMove);
  this.removeEventListener('mouseup', mUp);
}

handle.addEventListener('mousedown', function (evt) {
  lastPos = evt.clientY;
  this.addEventListener('mousemove', mMove);
  this.addEventListener('mouseup', mUp);
});
*/