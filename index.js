

/* SCENARIO #1 - FUNCTION DEFINIITION

I understand this is a "function definition"
and it will (when called) return a 
value of four.

In this case I am outputting the return value
via wrapping it in a console.log statement.

function doSomething() {
    return 2 + 2;
}

console.log(doSomething()); 

*/


//---------------------------------------------------------------


/* SCENARIO #2 - PICKING UP RETURN VALUE WITH A VARIABLE

Same function as above, but instead of doing a console.log()
I assigned the entire function to variable "x" in this case.

Then, I output "x" via console.log and some other stuff just
to make it stand out from the last one.

function doSomething() {
    return 2 + 2;
}

let x = doSomething();
console.log(x + " This is scenario two!");

*/


//---------------------------------------------------------------


/* SCENARIO #3 - ANONYMOUS FUNCTIONS

Now I have assigned a function directly to the variable 
doSomething.

Silly as this might seem, I kept getting frustrated because
running the following would return a function definition to
the console:

        console.log(doSomething);

Apparently after smacking my head against the desk hard enough,
I realized "it is a variable, but also contains a function, so
maybe that means I should put some parens at the end of it.
Strangely enough, it now works exactly as one would reasonably
expect.  (We'll just place this one in the "Duhhhh" file for
right now...lol.)  Just frustrating when you can't "see" stuff
for some reason!!!

let doSomething = function()
{
    return 2 + 2;
}

console.log( doSomething() );  <------ works like a charm.  :)

*/


//---------------------------------------------------------------


/* SCENARIO #4 - PASSING ARGUMENTS INTO ANONYMOUS FUNCTIONS

Created and ran the function below...no problemo.

let doSomething = function( arg1, arg2 ) {

    return arg1 + arg2;

};

console.log ( doSomething( 2, 2 ) + " Is this thing working?");  

*/


//let x = prompt("Please enter an integer: ");

//let y = prompt("Please enter another integer: ");

// console.log(x,y);  (Initially used this to test both my inputs / both working properly.)


function addemUp() {        // Not using this function because I realized what the problem is.
    return x + y;           // No need to comment out because I'm not calling it anywhere. 
}                           // Instead going to create another function and try parsing as an
                            // integer *BEFORE* any values are passed into the function as 
                            // arguments.


// console.log( addemUp() );  <---- This technically 'worked' but did a concat instead of math.

// console.log( parseInt( addemUp() ) );   <---- Hmmm...still doing concat instead of adding them.

let a = parseFloat( prompt("Number 1") );

let b = parseFloat( prompt("Number 2") );


function addemUp2() {

    return a + b;

}

//  console.log(addemUp2());  <---- Yup...that works; apparently gotta convert them to numbers BEFORE 
//                                  you pass them into the function?  (Unless you want them to concat
//                                  and not do anything mathematical.)


let q = 5;
let z = 5;

function goBonkers( arg1, arg2 ) {

    return (q + z + arg1 + arg2) * 10;

}

// console.log( goBonkers(5,5) );  <---- Okay, so this totally works, too.

// let x = goBonkers( 5, 5 );
//  console.log( x + " Yessir...sure seems to be working now.");  <---- Same here.


function factorial(n){

    if (n <= 1)
    {
        return 1;
    }

    else
    {
        return n * factorial(n-1);
    }

}


console.log( factorial(-1) );




