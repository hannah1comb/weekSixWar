class Player{
    constructor(cards){
        this.points = 0;
        this.cards = cards;
    }
}


class Card{
    constructor(suit, value, face){
        this.suit = suit;
        this.value = value;
        this.face = face;
    }
}


class Deck{
    constructor(){
        this.theCards = [];
        let suit = ['hearts', 'clubs', 'spades', 'diamonds'];
        let value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        let face = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

        // build the deck
        for (let i = 0; i < suit.length; i++){
            for (let j = 0; j < value.length; j++){
                this.theCards.push(new Card(suit[i], value[j], face[j]));
            }
        }

        // shuffle
        this.theCards = this.theCards.sort(() => Math.random() - 0.5)
    } 
}




function gamePlay(){
    let hannahsDeck = new Deck()      //get new deck
    let m = Math.ceil(hannahsDeck.theCards.length / 2);      //find index half and assign it to a variable
    let playerOne = new Player(hannahsDeck.theCards.slice(0, m));                  // half of the array is assigned to player one and player two
    let playerTwo = new Player(hannahsDeck.theCards.slice(-m));
   //find out who had the higher card
   for (let i = 0; i < m; i++){ 
       console.log(`Player one's card was ${playerOne.cards[i].face} of ${playerOne.cards[i].suit}.`); 
       console.log(`Player two's card was ${playerTwo.cards[i].face} of ${playerTwo.cards[i].suit}.`);
       if (playerOne.cards[i].value > playerTwo.cards[i].value){ 
           console.log('Player one wins!');
           playerOne.points += 1;
       }
       else if (playerTwo.cards[i].value > playerOne.cards[i].value){
           console.log('Player Two wins!');
           playerTwo.points += 1;

       }
       else if(playerOne.cards[i].value === playerTwo.cards[i].value){
           console.log('It\'s a tie! Zero points!');
       }
   }                              
                     
    if (playerOne.points > playerTwo.points){      //announce the winner
        alert('Player one wins the game!!!')
        return playerOne;
    } else {
        alert('Player two wins the game!!!') 
        return playerTwo;
    };

    
} 
gamePlay();
    


