(function(){
    "use strict";

var PiFastGpio = require("./pigpio.js"),
    redLED = 17,
    blueLED = 18,
    greenLED = 27,
    HOST = "127.0.0.1",
    PORT = 8888,
    dcred = 0,
    dcblue = 255,
    dcgreen = 127,
    gpio = new PiFastGpio();

    gpio.connect(HOST, PORT, function(err){
       if(err){
           throw err;
       } else {
           setInterval(function(){
               gpio.setPwmDutycycle(redLED, dcred);
               gpio.setPwmDutycycle(blueLED, dcblue);
               gpio.setPwmDutycycle(greenLED, dcgreen);
               if(dcred+10 >= 255){
                   dcred = 0;
               } else {
                   dcred = dcred+10;
               }
               if(dcblue+10 >= 255){
                   dcblue = 0;
               } else {
                   dcblue = dcblue+10;
               }
               if(dcgreen+10 >= 255){
                   dcgreen = 0;
               } else {
                   dcgreen = dcgreen+10;
               }
                console.log("green="+dcgreen+" blue="+dcblue+" red="+dcred);
           },1000);
       }
    });

})();