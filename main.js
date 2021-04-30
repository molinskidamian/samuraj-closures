/**
 * Kilka przydatnych definicji (wskazówek) jak możemy rozumieć domnięcia (closures).
 * * 1. Closure (domknięcie) to mechanizm, który pomaga Nam uzyskać dostęp do danej wartości poza funkcją i gdy ta funkcja nie jest już aktywna.
 *
 * * 2. Closure - zmienna istnieje w innej funkcji, mimo to, że funkcja, w której była stworzona ta zmienna nie jest już aktywna.
 *
 * * 3. W pamięci programu zmienna istnieje jeśli prowadzi do niej referencja z innej funckji. Możemu mieć do niej dost,ep, ale także je zmieniać.
 */

// example 1.
function x() {
  let number = 0;

  function y() {
    console.log(number);
  }
  return y
}

const example = x();

example();