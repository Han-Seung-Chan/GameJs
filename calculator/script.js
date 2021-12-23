let numberOne = '';
let operator = '';
let numberTwo = '';

const operatorTag = document.querySelector('#operator');
const resultTag = document.querySelector('#result');

const onClickNumber = (event) => {
  if (operatorTag.value == '') {
    // 비어있다
    numberOne += event.target.textContent;
    resultTag.value += event.target.textContent;
    return;
  }

  // 비어있지 않다
  if (operatorTag.value != '') {
    resultTag.value = '';
  }
  numberTwo += event.target.textContent;
  resultTag.value += event.target.textContent;
};

document.querySelector('#num-0').addEventListener('click', onClickNumber);
document.querySelector('#num-1').addEventListener('click', onClickNumber);
document.querySelector('#num-2').addEventListener('click', onClickNumber);
document.querySelector('#num-3').addEventListener('click', onClickNumber);
document.querySelector('#num-4').addEventListener('click', onClickNumber);
document.querySelector('#num-5').addEventListener('click', onClickNumber);
document.querySelector('#num-6').addEventListener('click', onClickNumber);
document.querySelector('#num-7').addEventListener('click', onClickNumber);
document.querySelector('#num-8').addEventListener('click', onClickNumber);
document.querySelector('#num-9').addEventListener('click', onClickNumber);

const onClickOperator = (op) => () => {
  //고차함수 함수가 함수를 반환하는 것
  if (numberTwo) {
    selectOperator();
    numberOne = resultTag.value;
    numberTwo = '';
  }

  if (numberOne) {
    operator = op;
    operatorTag.value = op;
  } else {
    alert('숫자를 먼저 입력하세요.');
  }
};

document.querySelector('#plus').addEventListener('click', onClickOperator('+'));
document
  .querySelector('#minus')
  .addEventListener('click', onClickOperator('-'));
document
  .querySelector('#divide')
  .addEventListener('click', onClickOperator('/'));
document
  .querySelector('#multiply')
  .addEventListener('click', onClickOperator('*'));

document.querySelector('#calculate').addEventListener('click', () => {
  if (numberTwo) {
    selectOperator();
    operatorTag.value = '';
    numberOne = resultTag.value;
    operator = '';
    numberTwo = '';
  } else {
    alert('숫자를 먼저 입력하세요.');
  }
});

document.querySelector('#clear').addEventListener('click', () => {
  numberOne = '';
  operator = '';
  numberTwo = '';
  operatorTag.value = '';
  resultTag.value = '';
});

function selectOperator() {
  switch (operator) {
    case '+':
      resultTag.value = parseInt(numberOne) + parseInt(numberTwo);
      break;
    case '-':
      resultTag.value = parseInt(numberOne) - parseInt(numberTwo);
      break;
    case '*':
      resultTag.value = parseInt(numberOne) * parseInt(numberTwo);
      break;
    case '/':
      resultTag.value = parseInt(numberOne) / parseInt(numberTwo);
      break;
    default:
      break;
  }
}
