



var i = 0

var cards = [
{
rank: 'queen',
suit: 'hearts',
cardImage: "images/queen-of-hearts.png"
},
{rank: 'queen',
suit: 'diamonds',
cardImage: "images/queen-of-diamonds.png"
},
{rank: 'king',
suit: 'hearts',
cardImage: "images/king-of-hearts.png"
},
{rank: 'king',
suit: 'diamonds',
cardImage: "images/king-of-diamonds.png"
},
]
cardsInPlay = [];

function createBoard(){
	for ( var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    console.log(i);
    console.log(cardElement)
	console.log(cards[i].cardImage)	
    /*cardElement.setAttribute('cards.cardImage', "images/back.png");*/
    cardElement.setAttribute('src', "images/back.png");
    console.log(cardElement)
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener("click",flipCard);  
    document.getElementById("game-board").appendChild(cardElement);
  
	}	   
}
function flipCard(cardId){
	var cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage)
	console.log(cards[cardId].suit)

	/*cardElement.setAttribute('src', cards[cardId].cardImage);*/
	this.setAttribute('src', cards[cardId].cardImage);

	if(cardsInPlay.length === 2){
	console.log("length = 2");
	checkForMatch()
  } 
}


function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!");
    alert("You Found a Match. You're Psychic!");

    } else {
    console.log("Sorry, try again.");
    alert("Sorry, Try Again!");
	}
	
}
	


   



createBoard()







