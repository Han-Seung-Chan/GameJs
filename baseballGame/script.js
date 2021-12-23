const inputTag = document.querySelector('input');
const formTag = document.querySelector('#form');
const logsTag = document.querySelector('#logs');

const numbers = [];
for (let i = 0; i < 9; i++) {
  numbers.push(i + 1);
}

const choiceNum = [];
for (let j = 0; j < 4; j++) {
  const randomNum = Math.floor(Math.random() * numbers.length);
  choiceNum.push(numbers[randomNum]);
  numbers.splice(randomNum, 1);
}

const selectNumber = [];

function checkForm(input) {
  if (input.length != 4) {
    return alert('4자리 숫자를 입력하세요!!');
  }
  if (new Set(input).size !== 4) {
    return alert('중복된 단어를 제거하세요!!');
  }
  if (selectNumber.includes(input)) {
    return alert('이미 입력한 값 입니다!!');
  }
  return true;
}

let out = 0;

formTag.addEventListener('submit', (event) => {
  event.preventDefault();
  inputTag.focus();
  const inputValue = inputTag.value;
  inputTag.value = '';
  checkForm(inputValue);

  if (checkForm(inputValue) == true) {
    selectNumber.push(inputValue);
  } else {
    return;
  }

  if (inputValue === choiceNum.join('')) {
    logsTag.innerText = '입력하신 숫자 : ' + inputValue + ' 정답입니다';
    return;
  }

  if (selectNumber.length >= 10) {
    logsTag.innerText =
      '10번의 기회를 다 사용 하셨습니다. 정답은 : ' + choiceNum.join('');
    return;
  }

  let strike = 0;
  let ball = 0;

  for (let n = 0; n < choiceNum.length; n++) {
    const searchNum = inputValue.indexOf(choiceNum[n]);
    if (searchNum > -1) {
      if (searchNum === n) {
        strike++;
      } else {
        ball++;
      }
    }
  }

  if (strike === 0 && ball === 0) {
    out += 1;

    logsTag.append(
      '입력하신 숫자 : ' +
        inputValue +
        ' 모두 정답이 아닙니다 현재 : ' +
        out +
        '아웃 입니다',
      document.createElement('br')
    );

    if (out === 3) {
      logsTag.innerText = '3아웃 입니다. 정답은 : ' + choiceNum.join('');
    }
    return;
  }

  logsTag.append(
    '입력하신 정답 : ' +
      inputValue +
      ', ' +
      strike +
      '스트라이크 ' +
      ball +
      '볼 입니다',
    document.createElement('br')
  );
});

console.log(choiceNum);
