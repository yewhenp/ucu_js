function Tetris(state = GAME_STATES.PAUSED) {
  // Private properties
  const playground = PlaygroundFactory.getInstance();
  let gameInverval = null; // TODO: will need to use this for gameover and pause events

  // public properties
  this.figures = []; // TODO: seems to not be accesable outside

  // Private methods
  const addFigure = () => {
    destroyLine();
    const newFigure = new Figure(this.figures);
    this.figures.push(newFigure);
    return newFigure;
  };

  const getCurrentFigure = () =>
    this.figures.find(figure => figure.state === STATES.FALLING) || addFigure();

  const events = (keyCode) => { // TODO: this seems to have refactoring potential
    const eventsMap = {
      [DOWN]() {
        state === GAME_STATES.PLAYING && getCurrentFigure().moveDown() ? this : gameOver();
      },
      [RIGHT]() {
        state === GAME_STATES.PLAYING && getCurrentFigure().moveRight();
      },
      [LEFT]() {
        state === GAME_STATES.PLAYING && getCurrentFigure().moveLeft();
      },
      [PAUSE]() {
        if (state === GAME_STATES.PLAYING)
          pause();
        else if (state === GAME_STATES.PAUSED)
          resume();
      },
    }

    eventsMap[keyCode] && eventsMap[keyCode]();
  };

  const destroyLine = () => {
    let lineIndex = this.checkLines();
    if (lineIndex !== false) {
      //pause();
      this.figures.forEach(figure => figure.destroyLine(lineIndex));

      //this.figures.forEach(figure => figure.cells.forEach(cell => cell.deRender()));
      // //this.cells.forEach(cell => cell.deRender());
      //this.figures.forEach(figure => setTimeout(privateDestroySecondStage, INTERVAL / 2, lineIndex));
      // this.figures.forEach(figure => figure.cells.forEach(cell => cell.render()));
      destroyLine();
    }
  };

  const privateDestroySecondStage = (lineIndex) => {
    this.figures.forEach(figure => figure.destroyLineSecondStage(lineIndex));
    this.figures.forEach(figure => figure.cells.forEach(cell => cell.render()));
    resume();
    destroyLine();
  }

  this.checkLines = () => {
    for (let i = 0; i < PLAYGROUND_HEIGHT; i++) {
      let count = this.checkFullLine(i);
      if (count === PLAYGROUND_WIDTH) return i;
    }
    return false;
  }

  this.checkFullLine = (lineIndex) => {
    let counter = 0;
    // for (let i = 0; i < this.figures.length; i++) {
    //   counter += this.figures.countAtRow(lineIndex);
    // }
    this.figures.forEach(figure => counter += figure.countAtRow(lineIndex));
    return counter;
  };

  const gameOver = () => {
    clearInterval(gameInverval);
    state = GAME_STATES.GAMEOVER;

    alert('Game over!');
  }

  const pause = () => {
    clearInterval(gameInverval);
    state = GAME_STATES.PAUSED;
  }

  const resume = () => {
    state = GAME_STATES.PLAYING;
    gameInverval = setInterval(() => {
      events(DOWN);
    }, INTERVAL);
  }

  // public methods
  this.play = () => {
    playground.render();
    document.addEventListener('keydown', ({keyCode}) =>  events(keyCode));
    resume();
  };
}

const tetris = new Tetris();
tetris.play()
