/**
 * Callbacks: a function passed as an argument to another function, to be
 * invoked after some operation completes. In JavaScript, callbacks are the
 * classic building block for asynchronous work (reading files, HTTP
 * requests, event handlers), but they work the same way for plain
 * synchronous code, as shown below.
 *
 * Promises and Async/await to organize better the assyncronous flow, but keeping use callback internally 
 * Each example below is self-contained. Uncomment one block at a time to
 * run it; only Example 2 is active by default.
 */

// ---------------------------------------------------------------------------
// Example 1: callback execution order
// The callback runs synchronously, in the middle of executeCallback's body -
// execution pauses there until the callback returns, then continues.
// Output order: "Executing before callback...", "Inside the callback
// function!", "Executing after callback...".
// ---------------------------------------------------------------------------
/*
function executeCallback(callback) {
    console.log("Executing before callback...");
    callback();
    console.log("Executing after callback...");
}

function myCallback() {
    console.log("Inside the callback function!");
}

executeCallback(myCallback);
*/

// ---------------------------------------------------------------------------
// Example 2 (active): passing arguments to a callback
// execute() doesn't know or care what greeting() does with "Alice" - it just
// calls the function it was given, forwarding the argument along.
// ---------------------------------------------------------------------------
function greeting(name) {
    console.log(`Hello, ${name}!`);
}

function execute(callback) {
    callback("Alice");
} 

execute(greeting);

function execute(callback) {
    callback()
}

execute(() => {
    console.log(10)
})

// Not all callback functions are syncronous

const numers = [1,2,3,4,5,6,7,8]

numers.forEach((number) => {
    console.log(number)
})


//Asyncronous

// SetTimeout register callback  --> callback on holding --> 2 seconds later --> callback executed 

console.log(`A`)

setTimeout(() => {
    console.log(`B`)
}, 2000)

console.log(`C`)

/* Callback and Event Loop */

// setTimeout(() => { console. log(`Test`)}, 2000)
//Callback is not executed immediatly
//Its send to Web APIs
// then to callback queue
// and finnaly to call stack when Event Loop allows


/* Callback Hell */

//hard do read
//hard to debug
// difficultly establishing error handling

findUser(id, (user) => {
    findOrders(user.id, (orders) => {
        findPayment(order[0].id, (payment) => {
            console.log(payment)
        })
    })
})