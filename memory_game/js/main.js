console.log("Up and running!");

var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];

var cardsInPlay = [];

var checkForMatch = function() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!");
    }
    else {
      alert("Sorry, try again.");
    }
};

var flipCard = function() {
  var cardId = this.getAttribute('data-id');
  console.log("User flipped " + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);
  this.setAttribute('src', cards[cardId].cardImage);
  console.log(cards[cardId].suit);

  if (cardsInPlay.length === 2) {
    checkForMatch();
    cardsInPlay = []; // THIS resets the array! :D
  }
};

var createBoard = function() {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);

    cardElement.addEventListener('click', flipCard);

    document.getElementById('game-board').appendChild(cardElement);
  }
};

// Call the gameBoard function to create the board
createBoard();


// Create function that triggers when click event occurs
var resetGame = function () {
  console.log('reset button has been clicked');
  clearBoard();
};

// Create resetButton event listener
var resetButton = document.getElementById('reset-button');

// Create event handler for when reset button is clicked
resetButton.addEventListener('click', resetGame);

// Clear gameboard
var clearBoard = function() {
  var currentBoard = document.getElementById('game-board');
  for (var i = 0; i < cards.length; i++) {
    currentBoard.removeChild(currentBoard.childNodes[0]);
  }
  createBoard(); // recreates game board
};