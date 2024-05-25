
const max=100;
const min=1;
let Number= Math.floor((Math.random()*(max-min+1))+min)
console.log(Number);


const input =document.querySelector("#GuessPlace");
const submit= document.querySelector("#submit");
const guide =document.querySelector("#guide");
const prevGuess=document.querySelector(".prevGuess");
const Count=document.querySelector(".count");
const newG =document.querySelector(".newG")


let playGame=true;
let numGuess=1;


if(playGame){
    newG.classList.add("hide")
submit.addEventListener('click',function (e){
    e.preventDefault();
    const guess=parseInt(input.value);
    input.value='';
    
    validateGuess(guess);
    
})
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number");
    }
    else if(guess<1){
        
        alert("Please enter a number greater than 1");
    }
    else if(guess>100){
        
        alert("Please enter a number less than 100");
    }
    else{
        if(numGuess==10){
            let message=`Game over, Number was ${Number}`;
            Count.innerHTML=0;
            displayMessage(message);
            endGame();
        }else{
            prevGuess.innerHTML+=`${guess},`
            Count.innerHTML=10-numGuess;
            numGuess++;
            console.log(numGuess);
            checkGuess(guess);
        }
    }

}

function checkGuess(guess){
    if(guess < Number){
        const message=`higher than ${guess}`;
        displayMessage(message);

    }else if(guess>Number){
        const message=`lower than ${guess}`;
        displayMessage(message);
    }
    else{
        const message=`congratulations correct guess`
        displayMessage(message);
        endGame();
    }
}

function displayGuess(guess){
    prevGuess.innerHTML+=`${guess} ,`
}
function displayMessage(message){
    guide.innerHTML=`Number is : ${message}`;

}

function endGame() {
    input.setAttribute('disabled','');
    input.value="";
    submit.setAttribute('disabled','')
    prevGuess.innerHTML="";
    newG.classList.remove("hide")
    playGame=false;
    newG.addEventListener("click",function(e){
        e.preventDefault();
        newGame();
    })
}

function newGame(){
    input.removeAttribute("disabled");
    submit.removeAttribute("disabled");
    Number= Math.floor((Math.random()*(max-min+1))+min)
    numGuess=0;
    guide.innerHTML='';

}