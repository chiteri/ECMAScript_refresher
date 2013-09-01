// RECURSION: Hanoi Puzzle 
// "This famous puzzle involves equipment that has three posts and a 
// set of discs of various diamters with holes in their centres. The 
// setup stacks all of their discs on the source post with smaller  
// discs on top of larger discs. The goal is to move the stack to the 
// the destination post by moving one disc at a time to another post, 
// never placing a larger disc on a smaller disc. 
// This puzzle has a trivial recursive solution."
// [ Douglas Crockford - Javascript, the good parts // Yahoo Press 2008 ]  
var HANOI = {}; 

HANOI.towers_of_hanoi = function (disc, src, aux, dest) {

    if (disc > 0) { 
        HANOI.towers_of_hanoi(disc-1, src, dest, aux);
        document.writeln('Move disc: '+disc+' from '+src+' to '+dest);
        HANOI.towers_of_hanoi(disc-1, aux, src, dest);
    } // End if 

}; // End function towers_of_hanoi 

// Invoke your newly created funtion 
HANOI.towers_of_hanoi(5, 'Src', 'Aux', 'Dest');
