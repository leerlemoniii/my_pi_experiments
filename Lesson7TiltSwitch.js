(function(){
    "use strict";

    var Gpio = require("onoff").Gpio,

        red =new Gpio(18,"out"),
        green = new Gpio(27,"out"),
        tilt = new Gpio(17,"high"),
        exit;

    exit = function() {
        red.unexport();
        green.unexport();
        tilt.unexport();
        process.exit();
    };

    tilt.watch(function(err,val){
       if(err){
           throw err;
       } else {
           if(val === 1){
               red.writeSync(0);
               green.writeSync(1);
           } else {
               red.writeSync(1);
               green.writeSync(0);
           }
       }
    });

    process.on('SIGINT', exit);
})();