let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const resetButton = document.querySelector("#reset-btn");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");


const getcomchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randidx = Math.floor(Math.random()*3);
    
    return options[randidx];
}

const showwinner = (userwin, userchoice, compchoice) => {
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `You Win :) Your ${userchoice} beats ${compchoice}`
        msg.style.backgroundColor = "green";
    }
    else{
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `You Win :) ${compchoice} beats Your ${userchoice}`
        msg.style.backgroundColor = "red";
    }
};

const drawgame = () => {
    msg.innerText = "Game was Draw :), Play Again"
    msg.style.backgroundColor = "#081b31";
}
const playgame = (userchoice) => {
    console.log("user choice = ", userchoice);

    const compchoice = getcomchoice();

    console.log("comp choice = ", compchoice);

    if(userchoice === compchoice){
        drawgame();
    }
    else{
        let userwin = true;
        if(userchoice === "rock"){
           userwin = compchoice === "paper" ? false : true;
        }
        else if(userchoice === "paper"){
            userwin = compchoice === "scissors" ? false : true;
        }
        else{
            userwin = compchoice === "rock" ? false : true;
        }
    showwinner(userwin, userchoice, compchoice);
    }
};

const resetGame = () => {
    userscore = 0;
    compscore = 0;
    userscorepara.innerText = userscore;
    compscorepara.innerText = compscore;
    msg.innerText = "Play Your Move";
    msg.style.backgroundColor = "#081b31";  // Default color
};


choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});


resetButton.addEventListener("click", resetGame);