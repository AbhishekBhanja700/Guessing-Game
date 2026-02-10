const user = prompt("Set the highest limit.");
const random = Math.floor(Math.random() * user) +1;

let guess = prompt("Guess the number");

while(true){
    if(guess == "quit"){
        console.log("user quit and the number was ", random);
        break;
    }

    if(guess == random){
        console.log("Great!! You guessed right. The number was ", random);
        break;
    }
    else if(guess < random){
        guess = prompt("Your guess is wrong. HINT: Number is Greater.Try again");
    }
    else if(guess > random){
        guess = prompt("Your guess is wrong. HINT: Number is Smaller.Try again");
    }
}
