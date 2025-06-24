let randomNumber = parseInt(Math.random() * 100 + 1)


const guess = document.querySelector('#guess');
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remainingSlot = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi');
const starOver = document.querySelector('.resultParas');
const submit = document.querySelector('#subt');

const p = document.querySelector('p')

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value);
        console.log(guess);
        
        validateGames(guess);
    })
}
function validateGames(guess){
    if(isNaN(guess)){
        alert(`Please enter the valid number`)
    }else if(guess < 1){
        alert(`Please enter the number greater than 1`)
    }else if(guess > 100){
        alert(`Please enter the number less than 100`)
    }else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over . Random Number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guess It Right Number`)
        endGame()
    }else if(guess > randomNumber){
        displayMessage(`Number is Too High`)
    }else{
        displayMessage(`Number is TOo low`)
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remainingSlot.innerHTML = `${11 - numGuess}`
}

function displayMessage(messages){
    lowOrHi.innerHTML = `<h2>${messages}</h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled','');  // key value main hota hai 
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`
    starOver.appendChild(p);
    playGame = false;
    newGame()
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 1;
        guessSlot.innerHTML = ''
        remainingSlot.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        starOver.removeChild(p);
        playGame = true;
    })
}

