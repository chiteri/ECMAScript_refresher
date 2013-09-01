// Basic variables to be used
var PROGRAM = {};

PROGRAM.name = 'Martin';
PROGRAM.number = 1e+6; 
PROGRAM.nombre; // Name in Spanish

// An object literal or a key-value pair 
PROGRAM.stooge = {
   "first-name" : "Jerome", 
   last_name : "Howard"
};


// Object literals with nested key-value pairs
PROGRAM.flight = {
    airline: "Kenya Airways", 
    number: 815, 
    departure : {
        IATA: "NBO", 
        time: "2013-09-17 17:35", 
        city: "Nairobi" 
    },

    arrival : {
        IATA: "GEN", 
        time: "2013-09-18 09:20",
        city: "Geneva" 
    }
}; 

PROGRAM.another_stooge ={ 
    first_name : "King", 
    last_name : "Clovis"
};

// Function objects 
PROGRAM.add = function(a, b) {
    return a+b;
};

PROGRAM.myObject = { 
     value: 0, 
     increment: function(inc){ 
        this.value += typeof inc === 'number'? inc : 1; 
     } //
};

// More on functions and their scopes of invocation 
// Augment myObject with a double method 
PROGRAM.myObject.double = function () {
    var that = this; 

    var helper = function () { 
        that.value = PROGRAM.add(that.value, that.value);
    }; // End helper method 

    helper(); // Invoke helper as a function 
};

// Constructor invocation pattern: 
// Create a constructor function called Quo. 
// It makes an object with status property. 
PROGRAM.Quo = function (string) { 
    this.status = string; 
}; // End function Quo  

// Give all instances of Quo a public method 
// called get_status 
PROGRAM.Quo.prototype.get_status = function () {
    return this.status;
} // End get_status 

// This is a function that adds a lot of stuff

// Note that defining a variable sum inside of the function 
// does not interfere with the sum defined outside the function 
// The function only sees the inner one 
PROGRAM.sum = function() {
    var i, sum = 0; 
    for (i = 0; i < arguments.length; i+=1) { 
        sum += arguments[i];
    } // End for
 
    return sum;

} // End function 

// Exceptions and their treatment in JavaScript 
PROGRAM.try_it = function () {
    try { 
        PROGRAM.add("seven");
    } 
    catch (e) { 
        document.writeln (e.name + ': ' + e.message);
    } // End catch 
} // End function try_it 

// Testing out the basics of JavaScript and object literals access 
document.writeln('<strong>Hello World!</strong> My name is <em> '+PROGRAM.stooge["first-name"]+' </em> and I will be leaving for the Alps on '+PROGRAM.flight.departure.city+' characters long.' );

// Doing simple loops with the language 
for (nombre in PROGRAM.another_stooge) { 
    if ( typeof PROGRAM.another_stooge[nombre] != 'function' ) { 
        document.writeln(nombre+': '+PROGRAM.another_stooge[nombre]);
    } 
} 

// Checking out how function invocation works 
document.writeln('The sum of three and four is '+PROGRAM.add(3, 4));

// More on function invocation 
PROGRAM.myObject.increment() ;
document.writeln('Display the value one of the objects internal field: ' + PROGRAM.myObject.value); // 1 is expected from the output 

// 
PROGRAM.myObject.increment(2); // 
document.writeln('Do an increment by two of the same field then send to display: ' + PROGRAM.myObject.value); // 3 is expected now 

// Do an invocation of double as a method 
PROGRAM.myObject.double(); 
document.writeln('Invoke the double function of your object as a method: '+PROGRAM.myObject.value);

// Make an instance of Quo 
PROGRAM.myQuo = new PROGRAM.Quo('Confused!');

// Display the value of status 
document.writeln('Send to output the value of my status Quo: '+PROGRAM.myQuo.get_status()); // Confused 

// Display the sum of any arbitrary numbers 
document.writeln('The sum of the following numbers is '+PROGRAM.sum(4, 8, 15, 16, 23, 42)); // 108 Expected

// This is a demonstration of Exceptions in JavaScript 
document.writeln('A demonstration of JavaScript exceptions: '+PROGRAM.try_it()); // Houston, we've got a problem
