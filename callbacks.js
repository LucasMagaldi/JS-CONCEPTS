/**
 * Callbacks: a function passed as an argument to another function, to be
 * invoked after some operation completes. In JavaScript, callbacks are the
 * classic building block for asynchronous work (reading files, HTTP
 * requests, event handlers), but they work the same way for plain
 * synchronous code, as shown below.
 *
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
