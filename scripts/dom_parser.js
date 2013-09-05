// Define a walk_the_DOM function that visits every node of the 
// tree in HTML source order, starting from some given node. It 
// invokes a function passing it each node in turn. walk_the_DOM 
// calls itself to process each of the child nodes. 

var DOM_PARSER = {}; 

DOM_PARSER.walk_the_DOM = function walk(node, func) {
    func(node); 
    node = node.firstChild; 
    
    while(node) { 
        DOM_PARSER.walk(node, func); 
        node = node.nextSibling;
    } // End while   
};

// Define a getElementsByAttribute function. It takes an attribute 
// name string and an optional matching value. It calls walk_the_DOM, 
// passing it a function that looks for an attribute name in the node. 
// The matching nodes are accumulated in a results array 
DOM_PARSER.getElementsByAttribute = function (att, value) {
    var results = [];
    
    DOM_PARSER.walk_the_DOM(document.body, function(node) { 
        var actual = node.nodeType === 1 && node.getAttibute(att); 

        if (typeof actual === 'string' && 
            (actual === value || typeof value !== 'string' ) )
            results.push(node);
    }); // End walk_the_DOM invocation 

    return results; 
};

//Define a function that sets a DOM node's colour to yellow and then 
// fades it to white. This is to teach ``Closure'' concepts in JS.  
DOM_PARSER.fade = function (node) { 
    var level = 1; 
    var step = function () { 
        var hex = level.toString(16); 
        
        node.style.backgroundColour = '#FFFF'+hex+hex; 
        document.writeln('<p>The value of colur is #ffff'+hex+hex+'</p>');

        if (level < 15) { 
            level += 1; 
            setTimeout(step, 100);
        } 
    }; 
    setTimeout(step, 100);  
}; // End function DOM_PASER.fade

DOM_PARSER.fade(document.body); 
