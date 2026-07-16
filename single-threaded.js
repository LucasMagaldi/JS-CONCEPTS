/**
 * Single-threaded JavaScript: a study of blocking code and the event loop
 * (call stack, microtask queue, macrotask/timer queue).
 *
 * Each example below is self-contained. Uncomment one block at a time to
 * run it; only Example 4 is active by default.
 */

// ---------------------------------------------------------------------------
// Example 1: a blocking loop
// A synchronous loop occupies the single thread completely, so nothing else
// (not even the next console.log) can run until it finishes.
// ---------------------------------------------------------------------------
/*
console.log("Hello, World!");

for (let i = 0; i < 5_000_000_000; i++) {}

console.log("Finishing loop");
*/

// ---------------------------------------------------------------------------
// Example 2: two blocking tasks
// task1's loop blocks the thread, so task2 only starts after task1 fully
// finishes, even though task2 has no dependency on task1.
// ---------------------------------------------------------------------------
/*
function task1() {
    console.log("Task 1 started");

    for (let i = 0; i < 5_000_000_000; i++) {}

    console.log("Task 1 finished");
}

function task2() {
    console.log("Task 2 started");
}

task1();
task2();
*/

// ---------------------------------------------------------------------------
// Example 3: microtask vs. synchronous code
// The .then() callback is a microtask: it only runs once the call stack is
// empty, even though the promise is already resolved synchronously.
// Output order: "Starting tasks", "Tasks finished", "promise resolved".
// ---------------------------------------------------------------------------
/*
console.log("Starting tasks");

Promise.resolve().then(() => {
    console.log("promise resolved");
});

console.log("Tasks finished");
*/

// ---------------------------------------------------------------------------
// Example 4 (active): macrotask scheduled from inside a microtask
// Microtasks have priority over macrotasks, but only for the queue that
// already exists at that point. A setTimeout created *inside* a promise
// callback becomes a brand-new macrotask and goes to the back of the timer
// queue - it does not "cut in line" ahead of a setTimeout already scheduled.
//
// Output order:
//   1. "Starting tasks"                                (sync)
//   2. "Tasks finished"                                 (sync)
//   3. "setTimeout callback executed"                   (macrotask, scheduled 1st)
//   4. "setTimeout callback inside promise executed"    (macrotask, scheduled 2nd,
//                                                         after the microtask ran)
// ---------------------------------------------------------------------------
console.log("Starting tasks");

setTimeout(() => {
    console.log("setTimeout callback executed");
}, 0);

Promise.resolve().then(() => {
    setTimeout(() => {
        console.log("setTimeout callback inside promise executed");
    }, 0);
});

console.log("Tasks finished");


// ---------------------     EVENT LOOP  ------------------------------------------------------

// The event loop is a mechanism that allows JavaScript to handle asynchronous operations
// while still being single-threaded. It continuously checks the call stack and the task queues
// (microtask queue and macrotask/timer queue) to determine what to execute next.

// The event loop works as follows:
// 1. Check if the call stack is empty.
// 2. If the call stack is empty, check the microtask queue for any pending microtasks.
// 3. If there are microtasks, execute them one by one until the microtask queue is empty.
// 4. If there are no microtasks, check the macrotask/timer queue for any pending macrotasks.
// 5. If there are macrotasks, execute them one by one until the macrotask queue is empty.
// 6. Repeat the process indefinitely.

    
// ---------------------------------------------------------------------------
