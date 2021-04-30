let number = 0;

const add = () => {
  number++;
  document.body.textContent = `Aktualny stan licznika to: ${number}`;
}

window.addEventListener('click', add);