orderTag = document.querySelector('.order');
inputTag = document.querySelector('input');
buttonTag = document.querySelector('button');
wordTag = document.querySelector('.word');

const player = parseInt(prompt('몇명에서 게임에 참가하나요?'));
if (player) {
  alert(player + '명 입니다');
  orderTag.innerHTML = 1;
} else {
  alert('게임을 시작 할 수 없습니다!');
}

word = '';
newWord = '';

const oninput = function (event) {
  newWord = event.target.value;
};

const onclick = function () {
  if (newWord.length != 3) {
    alert('세글자를  입력하세요!!!!');
  }

  let order = Number(orderTag.textContent);

  if (word == '') {
    setWord();
    orderTag.innerHTML = order + 1;
    return;
  }

  if (word[word.length - 1] == newWord[0]) {
    setWord();
    orderTag.innerHTML = order + 1;
    if (player == order) {
      orderTag.innerHTML = 1;
    }
  } else {
    alert(order + '번째 님이 게임에서 패배 했습니다');
  }
};

function setWord() {
  word = newWord;
  wordTag.innerHTML = word;
  inputTag.value = '';
  inputTag.focus();
}
inputTag.addEventListener('input', oninput);

buttonTag.addEventListener('click', onclick);
