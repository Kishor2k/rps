// revealing game page
const start = document.querySelector('.start');
const intro = document.querySelector('.intro')
const game = document.querySelector('.game')
start.addEventListener('click', ()=>{
    intro.classList.add('play');
    game.classList.add('play');
})
// selecting play buttons
let playerScore = 0;
let botScore = 0;
let counter = 0;
let winnerText = document.querySelector('.winner-text');
let rpsButtons = document.querySelectorAll('.game button');
let botChoiceArray = ['rock', 'paper', 'scissor'];
let playerImageChoice = document.querySelector('.player-choice-images');
let botImageChoice = document.querySelector('.computer-choice-images');
rpsButtons.forEach((button)=>{
    button.addEventListener('click',()=>{
        
        
        rpsGame(button);
        })
});

function rpsGame(button){
    
   
    
   playerChoice = button.innerText.toLowerCase();
   botChoice = botChoiceArray[Math.floor(Math.random() * botChoiceArray.length)]
   
  gameResult(playerChoice, botChoice);
  finalResult(winnerText, playerScore, botScore)
}

function gameResult(playerChoice, botChoice){
   
   
    // score
    // let playerScoreEl = document.querySelector('#player-score')
    // let botScoreEl = document.querySelector('#computer-score')
  
    
    
    let playerImgEl = document.createElement('img');

        playerImgEl.src = `./Images/${playerChoice}.png`
        playerImageChoice.appendChild(playerImgEl);

        let botImgEl = document.createElement('img');
        botImgEl.src =  `./Images/${botChoice}.png`
        botImageChoice.appendChild(botImgEl);

       

        // if both choices are same
    if(playerChoice === botChoice){ 
        winnerText.innerText = "This is a tie";
        playerScore++;
        botScore++;
        scoreUpdate(playerScore, botScore)
        return
    } 
    // possible choice combinations [ rock-paper, rock-scissor, scissor-paper, scissor-rock, paper-scissor, paper-rock]
    if(playerChoice === 'rock'){
        if(botChoice === 'scissor'){
            winnerText.innerText = 'Player Wins.'
            playerScore++;
            scoreUpdate(playerScore, botScore)
        } else{
            winnerText.innerText = 'Computer Wins.'
            botScore++;
            scoreUpdate(playerScore, botScore)
        }
    }

    if(playerChoice === 'scissor'){
        if(botChoice === 'paper'){
            winnerText.innerText = 'Player Wins.'
            playerScore++;
            scoreUpdate(playerScore, botScore)
        } else{
            winnerText.innerText = 'Computer Wins.'
            botScore++;
            scoreUpdate(playerScore, botScore)
        }
    }

    if(playerChoice === 'paper'){
        if(botChoice === 'rock'){
            winnerText.innerText = 'Player Wins.'
            playerScore++;
            scoreUpdate(playerScore, botScore)
        } else{
            winnerText.innerText = 'Computer Wins.'
            botScore++;
            scoreUpdate(playerScore, botScore)
        }
    }
}


function scoreUpdate(playerScore, botScore){
    let playerScoreEl = document.querySelector('#player-score')
    let botScoreEl = document.querySelector('#computer-score')

    playerScoreEl.innerText = playerScore;
    botScoreEl.innerText = botScore;
    counter++;
    
}
function finalResult(finalMessage, pScore, bScore){
    if(counter === 5){
        pScore > bScore ? finalMessage.innerText = 'Player won the game :)' : finalMessage.innerText = 'Computer won the game :(' 
        reset.classList.add('show');
    }
}

let reset = document.querySelector('.reset');
reset.addEventListener('click', ()=>{
    
    playerScore = 0;
    botScore =0;
    scoreUpdate(playerScore, botScore)
    counter = 0;
    winnerText.innerText = ''
    deleteImages(playerImageChoice)
    deleteImages(botImageChoice)
    reset.classList.remove('show')
})

function deleteImages(parentEl){
    
    let child = parentEl.lastElementChild
    while(child){
        parentEl.removeChild(child);
        child = parentEl.lastElementChild
    }
}