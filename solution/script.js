
// if else statement

// const number = parseInt(prompt("Enter a n

// Math.random()*(max-min)+min;

const number = Math.floor(Math.random()*10);
console.log(number);

if (number % 2 == 0) {


    console.log("Even");


} else {


    console.log("Odd");


}

if (number % 2 == 0 && number != 0) {


    console.log("Even");


} else if (number == 0) {


    console.log("Zero")


} else {


    console.log("Odd");


}

// for loop




for (let i = number; i < 10; i++) {

    console.log(i);


}

let i = number;

while (i < 10) {


    console.log(i);

    i++;


}

// do {

//     console.log(i);

//     i++;


// } while (i < 10);


let k = number;

switch (k) {

    case 5:
        console.log("Buzz");
        break;
    case 0:
        console.log ("Zero");
        break;
    default:
        console.log("Fizz");
}

for (let i = 0; i < 10; i++) {

    

    if (i == 5) {

        continue;

    }
    console.log (i);
    
}

function greeting(name , query) {
    let result = 'Hello ' + name + " "+ query
    console.log(result)
   
    
}

greeting ("nirmal", "how are you");
greeting ("santhosh", "who are you");

