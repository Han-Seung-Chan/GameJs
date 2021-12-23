const wordArr = [
  'algorithm',
  'database',
  'function',
  'class',
  'method',
  'module',
  'component',
  'process',
  'protocol',
  'sequence',
  'macro',
  'generics',
  'event handler',
  'library',
  'framework',
  'frontend',
  'backend',
  'client',
  'interface',
  'api',
  'constructor',
];

class GameHandler {
  constructor(wordArr) {
    this.wordArr = wordArr;
    this.$ = (selector) => document.getElementById(selector);
    this.$word = this.$('word');
    this.$text = this.$('text');
    this.score = 0;
    this.time = 5;
    this.countdown;
  }

  gameInit() {
    this.startTimer(this.time);
    this.textEventListener();
    this.showNewWord();
  }

  getWord() {
    return this.wordArr[Math.floor(Math.random() * wordArr.length)];
  }

  printWord() {
    const randomWord = this.getWord();
    return (this.$word.textContent = randomWord);
  }

  textEventListener() {
    this.$text.focus();
    this.$text.addEventListener('input', this.checkWord.bind(this));
  }

  checkWord(e) {
    let inputWord = e.target.value;
    const exampleWord = this.getCompareWord();
    if (inputWord === exampleWord) {
      this.startTimer(this.time);
      this.addScore();
      this.$text.value = '';
      this.showNewWord();
    }
  }

  showNewWord() {
    setTimeout(() => {
      this.printWord();
    }, 1000);
  }

  getCompareWord() {
    return this.$word.textContent;
  }

  addScore() {
    const $score = this.$('score');
    this.score++;
    $score.textContent = this.score;
  }

  startTimer(time) {
    clearInterval(this.countdown);
    const $time = this.$('time');
    this.countdown = setInterval(() => {
      let seconds = parseInt(time % 60, 10);
      $time.textContent = `0${seconds}초`;
      --time;

      if (time < 0) {
        clearInterval(this.countdown);
        this.$text.disabled = true;
        this.printEndGame();
      }
    }, 1000);
  }

  printEndGame() {
    const $endgame = this.$('endgame');
    $endgame.innerHTML = `
    <h1>시간초과</h1>
    <p>최종 점수는 ${this.score}점</p>
    <button onclick="location.reload()">다시시작</button>
  `;
  }
}

const typingGame = new GameHandler(wordArr);
typingGame.gameInit();
