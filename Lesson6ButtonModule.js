(function(){
    "use strict";

    var Gpio = require("onoff").Gpio,
        exit,
        red =new Gpio(27,"out"),
        green = new Gpio(18,"out"),
        prevval = 0,
        button = new Gpio(17,"in", "both"); // set both so it can handle the up and down state

    exit = function() {
        red.unexport();
        green.unexport();
        button.unexport();
        process.exit();
    };

    button.watch(function(err,val){
        if (err) {
            throw err;
        } else {
            if(val === 1) {
                if (prevval === 0) {
                    red.writeSync(0);
                    green.writeSync(1);
                    prevval = 1;
                } else {
                    red.writeSync(1);
                    green.writeSync(0);
                    prevval = 0;
                }
            }
            //if(val === 0){
            //    red.writeSync(0);
            //    green.writeSync(1);
            //} else {
            //    red.writeSync(1);
            //    green.writeSync(0);
            //}
        }
    });



    process.on('SIGINT', exit);
})();