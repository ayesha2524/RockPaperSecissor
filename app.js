let userscore=0
let compscore=0

const userScore= document.querySelector('#user-score')
const compScore = document.querySelector('#comp-score')
const choices = document.querySelectorAll('.choice')
const msg = document.querySelector('.msg')
console.log(choices);

 const drawgame=()=>{
    msg.innerHTML='Game is draw'
    msg.style.backgroundColor='#081b31'
    
 }
const genCopmChoice=()=>{
    const options=['rock','paper','scissors']
    let idx=Math.floor(Math.random()*3)
    return options[idx]
}
const showWinner=(userwin)=>{
    if(userwin){
     userscore++
     userScore.innerHTML=`${userscore}`
     msg.innerHTML=`You Win the Game`
     msg.style.backgroundColor='green'
    }else{
     compscore++
     compScore.innerHTML=`${compscore}`
     msg.innerHTML=`You Lose the Game`
     msg.style.backgroundColor='red'
    }

}
const gamePlay=(userchoice)=>{

    const compchoice=genCopmChoice();
    console.log(`ComputerChoice is ${compchoice}`);
    
    userwin=true
    if(userchoice==compchoice){
        drawgame()
    }else{
        if(userchoice=='rock'){
            userwin= compchoice=='paper'? false : true
        }
        else if(userchoice=='paper'){
            userwin=compchoice=='scissors'? false: true
        }
        else{
            userwin=compchoice=='rock'? false : true
        }
        showWinner(userwin)
    }
}

choices.forEach((choice)=>{
   choice.addEventListener('click',()=>{
    const userchoice= choice.getAttribute('id')
    console.log(`Your choice is ${userchoice}`);
    gamePlay(userchoice)
   })
})


