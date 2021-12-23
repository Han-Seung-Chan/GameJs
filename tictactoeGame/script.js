const body = document.body;
const tableTag = document.createElement('table');
const resultTag = document.createElement('div');
body.append(tableTag);
body.append(resultTag);

const rows = [];
let turn = 'O'; // O의 차례인지, X의 차례인지
let count = 0; // 9칸 중 몇 칸이 채워졌는지
let finished = false; // 게임 끝났는지 유무

//승부 결정 함수
const whoWinner = (widthIndex, heightIndex) => {
  let width = true;
  let height = true;
  let line1 = true;
  let line2 = true;
  for (let n = 0; n < 3; n++) {
    if (rows[widthIndex][n].textContent !== turn) {
      width = false;
    }
    if (rows[n][heightIndex].textContent !== turn) {
      height = false;
    }
    if (rows[n][n].textContent !== turn) {
      line1 = false;
    }
    if (rows[n][2 - n].textContent !== turn) {
      line2 = false;
    }
  }
  return width || height || line1 || line2;
};

const clickEvent = function (widthIndex, heightIndex) {
  return (event) => {
    //게임이 끝나면
    if (finished) {
      return;
    }
    // 이미 선택했던 칸이라면
    if (event.target.textContent) {
      return;
    }

    event.target.textContent = turn;
    count++;

    //승부가 났는가
    if (whoWinner(widthIndex, heightIndex)) {
      resultTag.innerText = turn + '님이 승리 했습니다';
      finished = true;
      return;
    }

    //무승부인가?
    if (count >= 9) {
      resultTag.innerText = '비겼습니다';
      finished = true;
      return;
    }

    //턴 바꾸기
    if (turn == 'O') {
      turn = 'X';
    } else if ((turn = 'X')) {
      turn = 'O';
    }
  };
};

//2차원 배열 생성 및 테이블 만들기
for (let i = 0; i < 3; i++) {
  trTag = document.createElement('tr');
  const cell = [];
  for (let j = 0; j < 3; j++) {
    tdTag = document.createElement('td');
    cell.push(tdTag);

    //클릭 이벤트
    tdTag.addEventListener('click', clickEvent(i, j));
    trTag.append(tdTag);
  }
  rows.push(cell);
  tableTag.append(trTag);
}
