// Your code goes here
const allElements = document.querySelectorAll('*');
const keyPopup = document.querySelector('.keystroke');
const keyPopupText = document.querySelector('.keystroke h1');
const toast = document.querySelector('.toast');
const toastText = document.querySelector('.toast p');

(function mouseoverEvent() {
  const navLinks = document.querySelectorAll('a.nav-link');

  function mouseOverCallback(eventObject) {
    const { target } = eventObject;
    target.classList.toggle('hover');
  }

  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('mouseover', mouseOverCallback);
  }
})();

(function keydownEvent() {
  function keyDownCallback(eventObject) {
    const { key } = eventObject;
    keyPopup.classList.remove('hidden');
    keyPopupText.textContent += key || "_";

    setTimeout(function () {
      keyPopup.classList.add('hidden');
      keyPopupText.textContent = "";
    }, 300);
  }

  document.addEventListener('keydown', keyDownCallback);
})();

(function wheelEvent() {
  function wheelCallback(eventObject) {
    const { deltaY } = eventObject;
    keyPopup.classList.remove('hidden');
    keyPopupText.textContent = deltaY < 0 ? '⬆️': '⬇️';
    keyPopupText.style.fontSize = '100px';

    setTimeout(function () {
      keyPopup.classList.add('hidden');
      keyPopupText.textContent = '';
      keyPopupText.removeAttribute('style');
    }, 500);
  }

  document.addEventListener('wheel', wheelCallback);
})();

(function dragDropEvent() {
  const siteImages = document.querySelectorAll('img');

  function dragCallback(eventObject) {
    const { target } = eventObject;
    target.style.boxShadow = '0 0 50px dodgerblue';
  }
  function dropCallback(eventObject) {
    const { target } = eventObject;
    target.removeAttribute('style');
  }

  for (let i = 0; i < siteImages.length; i++) {
    siteImages[i].addEventListener('drag', dragCallback);
    siteImages[i].addEventListener('dragend', dropCallback);
  }
})();

(function loadEvent() {
  function loadCallback(eventObject) {
    const { target } = eventObject;
    const siteAddress = window.origin + '/';
    const fileName = target.src.replace(siteAddress, '') || 'file';

    toast.classList.remove('hidden');
    toastText.textContent = `${fileName} loaded`;
  }

  setTimeout(function () {
    toast.classList.add('hidden');
    toastText.textContent = '';
  }, 1500);

  for (let i = 0; i < allElements.length; i++) {
    allElements[i].addEventListener('load', loadCallback);
  }
})();

(function focusEvent() {
  function focusCallback(eventObject) {
    const { target } = eventObject;
    const initialColor = target.style.color;

    setInterval(function () {
      if (target.style.color === initialColor) {
        target.style.color = 'dodgerblue';
      }
      else {
        target.style.color = initialColor;
      }
    }, 500);
  }

  for (let i = 0; i < allElements.length; i++) {
    allElements[i].addEventListener('focus', focusCallback);
  }
})();

(function resizeEvent() {
  function resizeCallback(eventObject) {
    const { target } = eventObject;
    keyPopup.classList.remove('hidden');
    keyPopupText.textContent = `${target.innerWidth} x ${target.innerHeight}`;
    keyPopupText.style.fontSize = '70px';

    setTimeout(function () {
      keyPopup.classList.add('hidden');
      keyPopupText.textContent = '';
      keyPopupText.removeAttribute('style');
    }, 1000);
  }

  window.addEventListener('resize', resizeCallback);
})();

(function scrollEvent() {
  function scrollCallback() {
    toast.classList.remove('hidden');
    toastText.textContent = 'Scrolling...';

    setTimeout(function () {
      toast.classList.add('hidden');
      toastText.textContent = '';
    }, 600);
  }

  document.addEventListener('scroll', scrollCallback);
})();

(function selectEvent() {
  const allInputs = document.querySelectorAll('input');

  function selectCallback(eventObject) {
    const { target } = eventObject;
    const initialValue = target.value;

    target.value = 'Awesome!!';
    target.style.fontSize = '50px';
    setTimeout(function () {
      target.removeAttribute('style');
      target.value = initialValue;
    }, 2000);
  }

  for (let i = 0; i < allInputs.length; i++) {
    allInputs[i].addEventListener('select', selectCallback);
  }
})();
