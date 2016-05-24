var maxTime = 1000;

// If input is even, double it
// If input is odd, error
// (call takes random amount of time < 1s)

var evenDoubler = function(v, callback) {
    var waitTime = Math.floor(Math.random()*(maxTime+1));
    if (v%2) {
        setTimeout(function() {
            callback(new Error("Odd input"));
        }, waitTime);
    } else {
        setTimeout(function() {
            callback(null, v*2, waitTime);
        }, waitTime);
    }
};

var count = 0;

for (var i = 0; i<10; i++) {
    console.log("Calling evenDoubler for value: " + i);
    evenDoubler(i, function(err, results, time){
    if(err)
    {
        console.log("Error : "+ err.message);
    } else {
        console.log("The results are:" + results + "(" + time + "ms)");
    }
    
    if(++count === 10)
    {
        console.log("Done!");
    }
});
};
console.log("-----");
console.log("Sridhar: Make sure you modify this code to remove the waitTime and randomness to see that things are executed in the same order ie., 0,1,2,3,4,5,6,7,8,9 rather than random. This means that Callbacks are also stored in taskQueue in the same order they received");

console.log("Sridhar: Another experiment you should do is to try it without callback. Will the execution become synchronous ?? chekc it out");
