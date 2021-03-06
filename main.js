/**
 * Kilka przydatnych definicji (wskazówek) jak możemy rozumieć domnięcia (closures).
 * * 1. Closure (domknięcie) to mechanizm, który pomaga Nam uzyskać dostęp do danej wartości poza funkcją i gdy ta funkcja nie jest już aktywna.
 *
 * * 2. Closure - zmienna istnieje w innej funkcji, mimo to, że funkcja, w której była stworzona ta zmienna nie jest już aktywna.
 *
 * * 3. W pamięci programu zmienna istnieje jeśli prowadzi do niej referencja z innej funckji. Możemu mieć do niej dostęp, ale także je zmieniać.
 */

// example 1.
/* function x() {
  let number = 0;

  function y() {
    console.log(number);
  }
  return y
}

const example = x();

example(); */


// Example 2
// const add = (start = 0) => {
//   let number = start;
//   return () => {
//     number++;
//     document.body.textContent = `Aktualny stan licznika kliknięć to: ${number}`;
//   }
// }

// const counter = add();
// document.addEventListener('click', counter);


// Example 3

const user = (name = "nieznajomy", age) => {
  let userName = name;
  let userAge = age;

  function showName() {
    console.log(`Cześć ${userName}! ${userAge >= 18 ? 'Możesz kupić sobie piwo.' : 'Nie możesz kupić sobie piwa.'}`);
  }

  return showName;
}

const mieszko = user();