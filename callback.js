//A callback is a function passed as an argument to another function
//this technique allows a function to call another function 
// A callback function can run after another function has finished
function greet(){
    console.log(`Good morning`)
}

//as i told before, callback is a function passed as an argument to another function
//in our case 'callback' is function that's passing as an argument
// we dont have to use exactly the word 'callback' we can use any word, i just chose callback
function introduce(name,callback){
    //a higher order function is the one which accepts the callback function
    //callback()
    const myName = 'Jasur'
    console.log(`${name}. I'm ${myName}.`)
    callback()//we can invoke our callback function wherever we want
}
introduce('Murad', greet)//as in declaration we are passing two arguments name and callback function as an argument
//when we invoke a higher order function "introduce", we have to pass arguments in order as it was in declaration
//greet, 'Murad' we cant, or else, we need to change arguments in declaration as well

