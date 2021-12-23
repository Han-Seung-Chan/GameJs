const rsp = ['가위', '바위', '보'];
let total = 0;
let win = 0;
let lose = 0;
let draw = 0;

const playTag = document.querySelector('#play');

playTag.addEventListener('click', () => {
  let computerChoice = Math.floor(Math.random() * 3);
  console.log(computerChoice);

  const com = rsp[computerChoice];

  const userChoice = document.querySelector('#rsp').value;
  const outputTag = document.querySelector('#output');

  if (userChoice == '') {
    alert('가위,바위,보 중 선택 하세요');
  } else {
    total++;

    let result = '';

    if (userChoice == computerChoice) {
      draw++;
      result = '비겼습니다.';
    }

    if ([1, -2].includes(userChoice - computerChoice)) {
      win++;
      result = '이겼습니다.';
    }

    if ([-1, 2].includes(userChoice - computerChoice)) {
      lose++;
      result = '졌습니다.';
    }

    outputTag.innerHTML +=
      '컴퓨터 결과 : ' +
      com +
      '<br>' +
      result +
      '<br>' +
      total +
      '전' +
      win +
      '승' +
      draw +
      '무' +
      lose +
      '패 ' +
      '<br>' +
      '<br>';
  }
});
