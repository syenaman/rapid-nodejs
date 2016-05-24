var maxTime = 1000;

// If input is even, double it
// If input is odd, error
// (call takes random amount of time < 1s)

var evenDoubler = function(req) 
{
    
    if (req%2) 
    {
        return new Error("Odd input");
    }
    else 
    {
        return req*2;
    }
    
}

var count = 0;
var res;
for (var i = 0; i<10; i++) 
{
    console.log("Calling evenDoubler for value: " + i);
    try
    {   res=evenDoubler(i);
    }
    catch(e)
    {
        console.log("Error : "+ e.message);
    }
        console.log("The results are:" + res);
}
console.log("-----");
