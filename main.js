const game = ["rock","paper","scissor"];

function gameresult(a, b){
    if (a == b){
        //console.log("its a draw");
        return "its a draw";
    }else if(a == "paper" && b == "rock"){
        //console.log("you win! Paper beats Rock");
        return "you win! Paper beats Rock";
    }else if(a == "rock" && b == "scissor"){
        //console.log("you win! Rock beats Scissor");
        return "you win! Rock beats Scissor";
    }else if(a == "scissor" && b == "paper"){
        //console.log("you win! Scissor beats Paper");
        return "you win! Scissor beats Paper";
    }else if(b == "paper" && a == "rock"){
        //console.log("You Lose! Paper beats Rock");
        return "You Lose! Paper beats Rock";
    }else if(b == "rock" && a == "scissor"){
        //console.log("You Lose! Rock beats Scissor");
        return "You Lose! Rock beats Scissor";
    }else if(b == "scissor" && a == "paper"){
        //console.log("You Lose! Scissor beats Paper");
        return "You Lose! Scissor beats Paper";
    }else{
        //console.log("please enter a valid rock paper scissor value");
        return "please enter a valid rock paper scissor value";
    }
};
let score = 0;
function keeping_score(a){
    if(a == "you win! Paper beats Rock"){
        return ++score;
    }else if(a == "you win! Rock beats Scissor"){
        return ++score;
    }else if(a == "you win! Scissor beats Paper"){
        return ++score;
    }else if(a == "You Lose! Paper beats Rock"){
        return --score;
    }else if (a =="You Lose! Rock beats Scissor"){
        return --score;
    }else if (a =="You Lose! Scissor beats Paper"){
        return --score;
    }
}
console.log(score);

const rounds = parseInt(prompt("how many rounds would you like to play sir: "))-1;
function gameround(){  
    for(let i = 0; i <= rounds ; i++){
        const getUserChoice = prompt("lets play rock paper scissors: ").toLowerCase();
        const randomchoice = Math.floor(Math.random() * game.length);

        function getComputerChoice(b,d){
                    return b[d];
        }
        const computerChoice = getComputerChoice(game,randomchoice);
        console.log(gameresult(getUserChoice,computerChoice ));
        keeping_score(gameresult(getUserChoice,computerChoice )); 
                  
    }
}    
console.log(gameround());
//console.log(score);
function finaleScore(q){
    if (q>0){
        console.log("you win overall")
    }else if (q == 0){
        console.log("its a tie")
    }else{
        console.log("the computer wins")
    }
}
finaleScore(score);