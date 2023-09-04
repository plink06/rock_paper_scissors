const game = ["rock","paper","scissor"];

function gameresult(a, b){
    if (a == b){
        console.log("its a draw");
        return 0;
    }else if(a == "paper" && b == "rock"){
        console.log("you win! Paper beats Rock");
        return 1;
    }else if(a == "rock" && b == "scissor"){
        console.log("you win! Rock beats Scissor");
        return 1;
    }else if(a == "scissor" && b == "paper"){
        console.log("you win! Scissor beats Paper");
        return 1;
    }else if(b == "paper" && a == "rock"){
        console.log("You Lose! Paper beats Rock");
        return -1;
    }else if(b == "rock" && a == "scissor"){
        console.log("You Lose! Rock beats Scissor");
        return -1;
    }else if(b == "scissor" && a == "paper"){
        console.log("You Lose! Scissor beats Paper");
        return -1;
    }else{
        console.log("please enter a valid rock paper scissor value");
        return 0;
    }
};
const rounds = parseInt(prompt("how many rounds would you like to play sir: "))-1;
for(let i = 0; i <= rounds ; i++){
    const getUserChoice = prompt("lets play rock paper scissors: ").toLowerCase();
    const randomchoice = Math.floor(Math.random() * game.length);

    function getComputerChoice(b,d){
                return game[randomchoice];
    }
    //console.log(gameresult(getUserChoice, getComputerChoice(game,randomchoice)));
    gameresult(getUserChoice, getComputerChoice(game,randomchoice));
            
    function score(){
        let s;
        s += gameresult(getUserChoice, getComputerChoice(game,randomchoice));
        if (s>0){
            console.log("you win overall");
        }
    }

            
}