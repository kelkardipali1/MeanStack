export class deckOfCards {
    public Cards() {
        /* 
        * Taking input
        */
        try {
            var suit = ["Clubs", "Diamonds", "Hearts", "Spades"];
            var rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
            var n = suit.length * rank.length;
            /* 
            Taking Empty Array for appending the suit and rank array
            */
            var cards = [];
            for (let i = 0; i < suit.length; i++) {
                for (let j = 0; j < rank.length; j++) {
                    cards.push("" + suit[i] + rank[j])
                }
            }

            var temp;
            for (var i = 0; i < n; i++) {
                /*
                Taking input randomly
                */
                var shuff = Math.floor(Math.random() * n);
                /* 
                swaping
                */
                temp = cards[shuff];
                cards[shuff] = cards[i];
                cards[i] = temp;
            }
            /* For Testing*/
            var array = []
            array[0] = cards
            array[1] = suit;
            array[2] = rank;
        } catch (err) {
            throw ("err in cards method")
        } return array

    }
}

/*
*To distribute 9 cards to 4 people each and print what cards does each person have
*/
class distribute extends deckOfCards {
    distributingCards() {
        try {
            var play = 0;
            var card = this.Cards();
            var cards = card[0];
            /* 
            * Taking 2D Empty array 
            */
            var personCards = [[], [], [], []];
            for (let p = 0; p < 4; p++) {
                for (let j = 0; j < 9; j++) {
                    personCards[p][j] = cards[j + play];
                }
                play = Math.floor(Math.random() * cards.length);
            }
            console.log(personCards);
            console.log(" ");
            console.log(" \n cards distributed among the four players are \n");
            console.log("the first players cards are : " + personCards[0]);

            console.log("the second players cards are : " + personCards[1]);
            console.log("the third players cards are : " + personCards[2]);
            console.log("the fourth players cards are : " + personCards[3]);
        } catch (err) {
            throw ("err in distributing cards method")
        }
    }
}
/*var classAccess1=new distribute();
classAccess1.distributingCards();
*/
