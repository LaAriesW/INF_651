
let GenerateRandom = () => {
    let random = Math.floor(Math.random() * 10) + 1;
    return random;
}

let randomNum = GenerateRandom();
console.log(randomNum)
while(true){
    let guess = prompt("enter guess")
    if(Number(guess) == randomNum){
        alert('correct guess');
        break;
    }
    else{
        alert('wrong guess');
        continue;
    }
}