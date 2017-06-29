var countdownGenerator = function (x) {
    var time = x;

    return function() {
        if(time >= 1) {
            console.log("T-min " + time--);
        } else if(time === 0) {
            console.log("Blast off");
            time--;    
        } else if(time < 0) {
            console.log("Rockets already gone, bub!");
        }
        
    }

};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!