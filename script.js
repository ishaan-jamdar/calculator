const nums = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.op');
const decimal = document.querySelector('#decimal');
const clearBtn = document.querySelector('#clear');
const deleteBtn = document.querySelector('#delete');
const prevScreen = document.querySelector('.history');
const mainScreen = document.querySelector('.current');

for (let num of nums) {
  num.addEventListener('click', () => mainScreen.textContent += num.textContent);
}

for (let op of operators) {
  op.addEventListener('click', () => {

  });
}

decimal.addEventListener('click', () => {
  if (!mainScreen.textContent.includes('.')) {
    mainScreen.textContent += '.';
  }
});

clearBtn.addEventListener('click', () => {
  prevScreen.textContent = '';
  mainScreen.textContent = '';
});

deleteBtn.addEventListener('click', () => mainScreen.textContent = mainScreen.textContent.slice(0, -1));

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(a, b, op) {
  if (op === '+') {
    return add(a, b);
  } else if (op === '-') {
    return subtract(a, b);
  } else if (op === 'x') {
    return multiply(a, b);
  } else if (op === '÷') {
    return divide(a, b);
  }
}
