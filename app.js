/*********************Create a Class Object*************************/
class Api {
    constructor(url) {
        this._url = url
    }

    async get() {
        return fetch(this._url)/*Fetch take data from a JSON file*/
            .then(res => res.json())
            .then(res => res.data)
            .catch(err => console.log('an error occurs', err))
    }
}

/************Create a Class legacy with "extends" & "super"****************/
class GameApi extends Api {
    
    constructor(url) {
        super(url)
    }

    async getGame() {
        return await this.get()
    }
}

/* Create a class with a function, this function add dynamic HTML with data JSON*/
class GameCard {
    constructor(profil) {
        this._profil = profil
    }

    createGameCard() {
        const article = document.getElementById("card");

        const gameCard = "<div class='result'><h2>"+this._profil.game+"</h2><h4>"+this._profil.tag+"</h4></div>"
        
        article.innerHTML += gameCard

        const CardGame = new Game(this._profil.game, this._profil.tag);
        tabGame.push(CardGame);
    }
}
  
/**************Class Object give file for the Class Legacy**************/
class App {
    constructor() {
        this.gameApi = new GameApi('data.json')
    }

    async main() {
        const cards = await this.gameApi.getGame()

        cards.forEach(profil => {/**For each Object use the previous function*/
            const Template = new GameCard(profil)
            Template.createGameCard()       
        })    
    }
}


/**Use the Class Object everytime user load the page*/    
const app = new App();
app.main();



/**Test d'algorithme */




const input = document.querySelector("input")
const game = document.querySelector(".game")

input.onkeyup = function(e) {
    //console.log(e.keyCode)

    //let value = String.fromCharCode(e.keyCode)

    //console.log(value)
    //value.toLowerCase()
    //console.log(value)
    //console.log(input.value)
    testNumber();
    removeGame();
}

function testNumber() {
    if (input.value.length >= 3) {
        //console.log("plus de 3 caractères")
        algoDeux();
    } else {
        //console.log("pas assez de caractères")
    }
}

function testData() {

    console.log(tabGame[0].game[0])
    
    if (input.value[0] == tabGame[0].game[0]) {
        console.log("meme lettre")
    } else {
        console.log("pas même lettre")
    }
}

/**Faire un triage alphabétique pour accélerer la recherche */
/**Rendre tous les élément de data en lowerCase ainsi que la valeur de l'input */

function algo() {

    let i = 0;
    let j = 0;
    let x = 0;

    while (j < tabGame.length) {
        
        while (i < input.value.length) {
            //console.log(input.value[i])
            //console.log(tabGame[j].game[i])

            if (input.value[i] === tabGame[j].game[i]) {
                
                game.innerHTML = "<div class='result'><h2>"+tabGame[j].game+"</h2><h4>"+tabGame[j].tag+"</h4></div>"
            }
            i++;
        }
        i = 0;
        j++;
    }
}

function algoDeux() {
    
    let j = 0;

    while (j < tabGame.length) {

        if (tabGame[j].game.includes(input.value)) {
            game.innerHTML = "<div class='result'><h2>"+tabGame[j].game+"</h2><h4>"+tabGame[j].tag+"</h4></div>"
        }
        j++;
    }
}







function removeGame() {
    
    if (input.value.length < 3) {
        while (game.firstChild) {
            game.removeChild(game.firstChild);
          }
    }
}




/**Table for checking Data */

class Game {
    constructor(game, tag) {
        this.game = game;
        this.tag = tag;
    }
}

let tabGame = [];
