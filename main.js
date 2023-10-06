const game = ["rock","paper","scissor"];
const btnrock = document.querySelector("#rock");
const btnpaper = document.querySelector("#paper");
const btnscissors = document.querySelector("#scissors");
const scoreoutput = document.querySelector('#output');
const runningScore = document.querySelector('#runningscore');
function gameresult(a, b){
    if (a == b){
        runningScore.textContent = 'its a draw';
        return "its a draw";
    }else if(a == "paper" && b == "rock"){
        runningScore.textContent = 'you win! Paper beats Rock';
        return "you win! Paper beats Rock";
    }else if(a == "rock" && b == "scissor"){ 
        runningScore.textContent = 'you win! Rock beats Scissor';  
        return "you win! Rock beats Scissor";
    }else if(a == "scissor" && b == "paper"){   
        runningScore.textContent = 'you win! Scissor beats Paper';
        return "you win! Scissor beats Paper";
    }else if(b == "paper" && a == "rock"){
        runningScore.textContent = 'you win! Scissor beats Paper';
        return "You Lose! Paper beats Rock";
    }else if(b == "rock" && a == "scissor"){  
        runningScore.textContent = 'You Lose! Rock beats Scissor';     
        return "You Lose! Rock beats Scissor";
    }else if(b == "scissor" && a == "paper"){
        runningScore.textContent = 'You Lose! Scissor beats Paper';
        return "You Lose! Scissor beats Paper";
    }else{
        runningScore.textContent = 'please enter a valid rock paper scissor value';
        return "please enter a valid rock paper scissor value";
    }
};
let userScore = 0;
let compScore = 0;
function keeping_score(a){
    if(a == "you win! Paper beats Rock"){
        return ++userScore;
    }else if(a == "you win! Rock beats Scissor"){
        return ++userScore;
    }else if(a == "you win! Scissor beats Paper"){
        return ++userScore;
    }else if(a == "You Lose! Paper beats Rock"){
        return ++compScore;
    }else if (a =="You Lose! Rock beats Scissor"){
        return ++compScore;
    }else if (a =="You Lose! Scissor beats Paper"){
        return ++compScore;
    }
}
//console.log(score);
function gameround(x){  
        
        const randomchoice = Math.floor(Math.random() * game.length);
        function getComputerChoice(b,d){
                    return b[d];
        }
        const computerChoice = getComputerChoice(game,randomchoice);
        keeping_score(gameresult(x,computerChoice));        
}    
btnrock.addEventListener('click',()=>{
    gameround('rock');
    finaleScore(userScore, compScore);
})
btnpaper.addEventListener('click',()=>{
    gameround('paper');
    finaleScore(userScore, compScore);
})
btnscissors.addEventListener('click',()=>{
    gameround('scissor');
    finaleScore(userScore, compScore);
})
function finaleScore(q, s){
    if (q == 5){
        scoreoutput.textContent = `you win 5 to ${s}`;
    }else if (s == 5){
        scoreoutput.textContent = `the computer wins 5 to ${q}`;
    }else if (s < 5 && q < 5){
        scoreoutput.textContent = `the score is ${q} for you, and ${s} for the computer`
    }else {
        scoreoutput.textContent = " stop playing the game is over and i dont wanna think of a way to stop it this is the best i can do"
    }
}
