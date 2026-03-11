// src/counter.js
let counter = 0;

const increasecounter = () => {
  counter += 1;
  return counter;
};

const decreasecounter = () => {
  counter -= 1;
  return counter;
};
const getcounter = () => counter;

const resetcounter = () => {
  counter = 0;
  return counter;
};

module.exports = { increasecounter, decreasecounter, getcounter, resetcounter };