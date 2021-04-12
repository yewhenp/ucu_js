// falling - new figure is put on the playgound
// static - figure stoped moving. This happens when there are obsicles for any cells bellow
function Figure(obsticles, state = STATES.FALLING) {
  // Public properties
  this.cells = [];
  this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
  this.id = helperMethods.idGenerator.next().value;
  this.state = state;
  this.obsticles = obsticles;

  // Private methods
  const validFor = (direction) =>
    this.cells.every(cell => cell.validFor(direction));

  // initialise figure cells
  const addCell = (x, y) =>
    this.cells.push(new Cell(x, y, this.color, this.id, this.obsticles, this.state));

  const generateCoordinates = () => {
    let newCoordsTuple = INITIAL_POSITIONS[Math.floor(Math.random() * INITIAL_POSITIONS.length)];
    let newCoords = [];
    for (var i = 0; i < newCoordsTuple[0].length; i++)
      newCoords[i] = newCoordsTuple[0][i].slice();
    
    let shiftConst = Math.floor(Math.random() * newCoordsTuple[1]);
    console.log(shiftConst)
    newCoords.forEach(coord => coord[1]+=shiftConst);
    return newCoords;
  }
    

  generateCoordinates().forEach(([y, x]) =>
    addCell(x, y));

  // Public methods
  this.moveDown = () => {
    if (validFor(DOWN)) {
      this.cells.forEach(cell => cell.deRender());
      this.cells.forEach(cell => cell.moveDown());
    } else {
      this.state = STATES.STATIC
      for (let i = 0; i < this.cells.length; i++) {
        if (this.cells[i].y > PLAYGROUND_HEIGHT) {
          return false;
        }
      }
    }
    return true;
  };

  this.moveRight = () => { // TODO: move right and move left are almost identical
    if (!validFor(RIGHT)) return;

    this.cells.forEach(cell => cell.deRender());
    this.cells.forEach(cell => cell.moveRight());
  };

  this.moveLeft = () => {
    if (!validFor(LEFT)) return;

    this.cells.forEach(cell => cell.deRender());
    this.cells.forEach(cell => cell.moveLeft());
  };

  this.destroyLine = (lineIndex) => {
    if (this.state === STATES.STATIC) {
      destroyLineFirstStage(lineIndex);
      this.destroyLineSecondStage(lineIndex);
    }
  }

  const destroyLineFirstStage = (lineIndex) => {
    let newCellArr = [];
    for( var i = 0; i < this.cells.length; i++){ 
      if (this.cells[i].y === lineIndex) { 
        this.cells[i].deRender();
      } else {
        newCellArr.push(this.cells[i]);
      }
    }
    this.cells = newCellArr;
  }

  this.destroyLineSecondStage = (lineIndex) => {
    this.cells.forEach(cell => cell.deRender());
    for( var i = 0; i < this.cells.length; i++){ 
      if (this.cells[i].y > lineIndex) { 
        this.cells[i].y--; 
      }
    }
    this.cells.forEach(cell => cell.render());
  }

  this.countAtRow = (lineIndex) => {
    let count = 0;
    this.cells.forEach(cell => cell.y === lineIndex ? count++ : count);
    return count;
  }

  this.rotate = () => {
    // TODO: this is complicated. But really can be solved with basic math.
    //       make sure you are rotating around the center element
    //       all figures will be eaither 3 cells wide or 3 cells hight
  }
}
