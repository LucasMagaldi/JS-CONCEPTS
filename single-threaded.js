
// This is a single-threaded JavaScript code snippet that demonstrates a blocking operation.
/*
    console.log("Hello, World!");

    for(let i = 0; i < 5000000000; i++) {}

    console.log("Finishing loop");
*/

// The above loop is a blocking operation that will prevent any further code execution until it completes.


// To demonstrate the blocking nature of JavaScript, we can define two tasks and see how they execute

/*
    function task1() {
        console.log("Task 1 started");

        for(let i = 0; i < 5000000000; i++) {}

        console.log("Task 1 finished");
    }

    function task2() {
        console.log("Task 2 started");  
    }

    task1();
    task2();

*/
// In this example, task1 will block the execution of task2 until it completes, demonstrating the single-threaded nature of JavaScript.


