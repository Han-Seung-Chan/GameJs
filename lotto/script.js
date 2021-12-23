const lottoNum = [];
for (let n = 0; n < 45; n++) {
  lottoNum.push(n + 1);
}

let test = new Set();
test.size = 7;

while (test.size !== 7) {
  const randomNum = Math.floor(Math.random() * lottoNum.length);
  test.add(randomNum + 1);
}

const selectNum = [];
test.forEach((value) => selectNum.push(value));

const resultTag = document.querySelector('#result');
const bonusTag = document.querySelector('#bonus');

for (let j = 0; j < selectNum.length - 1; j++) {
  setTimeout(() => {
    const lottoBallTag = document.createElement('div');
    lottoBallTag.className = 'lottoBall';
    color(j, lottoBallTag);
    lottoBallTag.innerText = selectNum[j];
    resultTag.append(lottoBallTag);
  }, (j + 1) * 1000);
}

setTimeout(() => {
  const bonusBallTag = document.createElement('span');
  bonusBallTag.className = 'lottoBall';
  bonusBallTag.innerText = selectNum[6];
  bonusTag.append(bonusBallTag);
}, 7000);

function color(j, lottoBallTag) {
  if (selectNum[j] < 10) {
    lottoBallTag.style.background = 'red';
    lottoBallTag.style.color = 'white';
  } else if (selectNum[j] < 20) {
    lottoBallTag.style.background = 'orange';
  } else if (selectNum[j] < 30) {
    lottoBallTag.style.background = 'yellow';
  } else if (selectNum[j] < 40) {
    lottoBallTag.style.background = 'green';
    lottoBallTag.style.color = 'white';
  } else if (selectNum[j] < 50) {
    lottoBallTag.style.background = 'blue';
    lottoBallTag.style.color = 'white';
  }
}
