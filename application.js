var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const againbtn_div = document.getElementById("s");
const alert_div = document.getElementById("action-message");
const again_div = document.querySelector(".choices");
const againbtn = document.getElementById("a");

function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice,computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${convertToWord(userChoice)}   beats  ${convertToWord(computerChoice)}  . You win!`;
    toTen();
    
}

function toTen(){
    if(userScore === 10){
        alert_div.innerHTML = ` <div class="alert alert-success" role="alert">
        SUCCESSSSS
      </div> `;
        again_div.innerHTML = ` <div class="choice" id="a">
        <p>AGAIN</p>
    </div> `;
        again_div.addEventListener('click',function(){
            againbtn.style.display = inline;
            main();
        })
    }
    if(computerScore === 10){
        alert_div.innerHTML = ` <div class="alert alert-danger" role="alert">
       DANGERRRRRR
      </div> `;
        again_div.innerHTML = ` <div class="choice" id="a">
        <p>AGAIN</p>
    </div> `;
        again_div.addEventListener('click',function(){
            againbtn.style.display = inline;
            main();
        })
    }
}
   
    



function lose(userChoice,computerChoice){
    computerScore ++;
    userScore_span.innerHTML = userScore;
    console.log(userScore);
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${convertToWord(userChoice)}   beats  ${convertToWord(computerChoice)}  . You lost!`;
    toTen();
}

function draw(userChoice,computerChoice){
    
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    console.log(userScore);
    result_div.innerHTML = `${convertToWord(userChoice)}  equals to  ${convertToWord(computerChoice)}. You could not win!`;
    toTen();
}
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case "rp":
        case "pr":
        case "sp":
            win(userChoice,computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,computerChoice);
            break;
    }
}

function main(){
 
rock_div.addEventListener('click',function(){
    game("r");
})

paper_div.addEventListener('click',function(){
    game("p");
})

scissors_div.addEventListener('click',function(){
    game("s");
})
}

main();