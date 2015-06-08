class Player {
  constructor(name, startingX, startingY) {

  this.name = name;
  this.x = startingX;
  this.y = startingY;
  }

  moveRight(map, gameState) {
    if(map[this.x][this.y + 1] === undefined) {
      console.log('stop trying to run off the edge!')
    } else if(map[this.x][this.y + 1] === 5) {
      console.log('you hit a monster, game over!')
      gameState.gameOver = true;
    } else if(map[this.x][this.y + 1] === 7) {
      console.log('you found the key!')
      gameState.gameOver = true;
    } else {
      console.log('moved right!');
      map[this.x][this.y + 1] = 1;
      map[this.x][this.y] = 0;
      this.y = this.y + 1;
      console.log(map);
    }
  }

  moveDown(map, gameState) {
    if(map[this.x + 1] === undefined) {
      console.log('you dun goofed going too low')
    } else if(map[this.x + 1][this.y] === undefined) {
      console.log('stop trying to run off the edge')
    } else if(map[this.x + 1][this.y] === 5) {
      console.log('you hit a monster, game over!')
      gameState.gameOver = true;
    } else if(map[this.x + 1][this.y] === 7) {
      console.log('you found the key!')
      gameState.gameOver = true;
    } else {
      console.log('moved down!');
      map[this.x + 1][this.y] = 1;
      map[this.x][this.y] = 0;
      this.x = this.x + 1;
      console.log(map);
    }
  }

  moveLeft(map, gameState) {
    if(map[this.x][this.y - 1] !== undefined) {
      console.log('stop trying to run off the edge!')
    } else if(map[this.x][this.y - 1] === 5) {
      console.log('you hit a monster, game over!')
      gameState.gameOver = true;
    } else if(map[this.x][this.y - 1] === 7) {
      console.log('you found the key!')
      gameState.gameOver = true;
    } else {
      console.log('moved left!');
      map[this.x][this.y - 1] = 1;
      map[this.x][this.y] = 0;
      this.y = this.y - 1;
      console.log(map);
    }
  }

  moveUp(map, gameState) {
    if(map[this.x - 1] === undefined) {
      console.log('you dun goofed going too high')
    } else if(map[this.x - 1][this.y] === undefined) {
      console.log('stop trying to run off the edge!')
    } else if(map[this.x - 1][this.y] === 5) {
      console.log('you hit a monster, game over!')
      gameState.gameOver = true;
    } else if(map[this.x + 1][this.y] === 7) {
      console.log('you found the key!')
      gameState.gameOver = true;
    } else {
      console.log('moved up!');
      map[this.x - 1][this.y] = 1;
      map[this.x][this.y] = 0;
      this.x = this.x - 1;
      console.log(map);
    }
  }

}

// speedyPlayer moves twice as fast.

class speedyPlayer extends Player{
  constructor(name, startingX, startingY) {

  super();
  this.name = name;
  this.x = startingX;
  this.y = startingY;
  }

  moveRight(map, gameState) {
    if(map[this.x][this.y + 2] === undefined) {
      console.log('stop trying to run off the edge!')
    } else if(map[this.x][this.y + 2] === 5) {
      console.log('you hit a monster, game over!')
      gameState.gameOver = true;
    } else if(map[this.x][this.y + 2] === 7) {
      console.log('you found the key!')
      gameState.gameOver = true;
    } else {
      console.log('moved right!');
      map[this.x][this.y + 2] = 1;
      map[this.x][this.y] = 0;
      this.y = this.y + 2;
      console.log(map);
    }
  }

  moveDown(map, gameState) {
    if(map[this.x + 2] === undefined) {
      console.log('you dun goofed going too low')
    } else if(map[this.x + 2][this.y] === undefined) {
      console.log('stop trying to run off the edge')
    } else if(map[this.x + 2][this.y] === 5) {
      console.log('you hit a monster, game over!')
      gameState.gameOver = true;
    } else if(map[this.x + 2][this.y] === 7) {
      console.log('you found the key!')
      gameState.gameOver = true;
    } else {
      console.log('moved down!');
      map[this.x + 2][this.y] = 1;
      map[this.x][this.y] = 0;
      this.x = this.x + 2;
      console.log(map);
    }
  }

  moveLeft(map, gameState) {
    if(map[this.x][this.y - 2] !== undefined) {
      console.log('stop trying to run off the edge!')
    } else if(map[this.x][this.y - 2] === 5) {
      console.log('you hit a monster, game over!')
      gameState.gameOver = true;
    } else if(map[this.x][this.y - 2] === 7) {
      console.log('you found the key!')
      gameState.gameOver = true;
    } else {
      console.log('moved left!');
      map[this.x][this.y - 2] = 1;
      map[this.x][this.y] = 0;
      this.y = this.y - 2;
      console.log(map);
    }
  }

  moveUp(map, gameState) {
    if(map[this.x - 2] === undefined) {
      console.log('you dun goofed going too high')
    } else if(map[this.x - 2][this.y] === undefined) {
      console.log('stop trying to run off the edge!')
    } else if(map[this.x - 2][this.y] === 5) {
      console.log('you hit a monster, game over!')
      gameState.gameOver = true;
    } else if(map[this.x + 2][this.y] === 7) {
      console.log('you found the key!')
      gameState.gameOver = true;
    } else {
      console.log('moved up!');
      map[this.x - 2][this.y] = 1;
      map[this.x][this.y] = 0;
      this.x = this.x - 2;
      console.log(map);
    }
  }

}

class Dungeon {
  constructor(difficulty, player) {
    if(difficulty === 'easy') {
      this.map = [[1,0,0,0],[0,0,0,7]];
    }
    else if(difficulty === 'medium') {
      this.map = [[1,0,0,0],[0,0,0,0],[5,0,0,0],[0,0,0,7]];
    }
    else {
      this.map = [[1,0,0,5],[0,0,5,0],[0,0,0,0],[0,0,5,0],[0,0,0,0],[0,5,0,7]];
    }

    this.player = player;
  }

}

// Initializing Player and Dungeon

let Jon = new Player('Jon', 0, 0);

let FireDungeon = new Dungeon('hard', Jon);


var startWinningGame = dungeon => {

  console.log('New Game');

  let gameState = {gameOver: false};

  let map = dungeon.map;

  let currentPlayer = dungeon.player;

  while(!gameState.gameOver) {

    // Script written to win the game

    currentPlayer.moveRight(map, gameState);

    currentPlayer.moveDown(map, gameState);

    currentPlayer.moveDown(map, gameState);

    currentPlayer.moveDown(map, gameState);

    currentPlayer.moveDown(map, gameState);

    currentPlayer.moveRight(map, gameState);

    currentPlayer.moveDown(map, gameState);

    currentPlayer.moveRight(map, gameState);
  }
}

startWinningGame(FireDungeon);





