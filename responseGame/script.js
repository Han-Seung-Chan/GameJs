const screenTag = document.querySelector('#screen');
const resultTag = document.querySelector('#result');

let startTime;
let endTime;
const saveScore = [];
let timeStop;

screenTag.addEventListener('click', () => {
  if (screenTag.classList.contains('ready')) {
    // 파랑
    screenTag.classList.remove('ready');
    screenTag.classList.add('set');
    screenTag.innerText = '초록색이 되면 클릭하세요';

    timeStop = setTimeout(() => {
      startTime = new Date();
      screenTag.classList.remove('set');
      screenTag.classList.add('go');
      screenTag.innerText = '클릭하세요!';
    }, Math.floor(Math.random() * 1000) + 1000);
    // 1초에서 2초 사이 2000~3000 사이 수
  } else if (screenTag.classList.contains('set')) {
    // 빨강
    clearTimeout(timeStop);
    screenTag.classList.remove('set');
    screenTag.classList.add('ready');
    screenTag.innerText = '너무 성급하시군요!' + '<br> 다시 클릭해 주세요';
  } else if (screenTag.classList.contains('go')) {
    // 초록
    endTime = new Date();
    const timeValue = endTime - startTime;
    saveScore.push(timeValue);
    const average = saveScore.reduce((a, c) => a + c) / saveScore.length;
    resultTag.innerText = `현재 ${timeValue}ms, 평균: ${average}ms`;

    startTime = null;
    endTime = null;
    screenTag.classList.remove('go');
    screenTag.classList.add('ready');
    screenTag.innerText = '클릭해서 시작하세요';
  }
});
