const number = parseInt(prompt('몇명이 참가하나요?'));
alert(number + '명입니다');

const inputTag = document.querySelector('input');
const buttonTag = document.querySelector('button');
const orderTag = document.querySelector('#order');
const wordTag = document.querySelector('#word');

inputTag.addEventListener('input', (event) => {
  newWord = event.target.value;
});

buttonTag.addEventListener('click', clickFunc);

let newWord = '';
let word = '';

function clickFunc() {
  if (!word || word[word.length - 1] === newWord[0]) {
    word = newWord;
    wordTag.innerText = word;

    const order = Number(orderTag.textContent);
    if (order + 1 > number) {
      orderTag.innerText = 1;
    } else {
      orderTag.innerText = order + 1;
    }
  } else {
    alert(Number(orderTag.textContent) + '번째 님이 패배 하셨습니다');
  }
  inputTag.value = '';
  inputTag.focus();
}
