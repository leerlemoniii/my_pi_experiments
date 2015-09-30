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
//// now we are using pi-blaster and piblaster js so we can use pwm to set colors of the rgb
//    var a=0,
//        piblaster = require('pi-blaster.js'),
//        counter = 0,
//        redLed = 1,
//        blueLed = 1,
//        greenLed = .5,
//        redDirection = "up",
//        greenDirection = "up",
//        blueDirection = "up",
//        roundNumber = function (number, decimals) {
//        var newnumber = new Number(number+'').toFixed(parseInt(decimals));
//        return parseFloat(newnumber);
//    };
//    piblaster.setPwm(17, redLed );
//    piblaster.setPwm(27, greenLed);
//    piblaster.setPwm(18, blueLed );
//    while(counter < 1000000){
//        //setTimeout(function(){
//            if(redLed >= 1){
//                redDirection = "down";
//                redLed = 1;
//            }
//            if(greenLed >= 1){
//                greenDirection = "down";
//                greenLed = 1;
//            }
//            if(blueLed >= 1){
//                blueDirection = "down";
//                blueLed = 1;
//            }
//            if(redLed <= 0){
//                redDirection = "up";
//                redLed = .1;
//            }
//            if(greenLed <= 0){
//                greenDirection = "up";
//                greenLed =.1;
//            }
//            if(blueLed <= 0){
//                blueDirection = "up";
//                blueLed = .1;
//            }
//            if(redDirection === "up"){
//                redLed = redLed + .1;
//            } else {
//                redLed = redLed - .1;
//            }
//            if(blueDirection === "up"){
//                blueLed = blueLed + .1;
//            } else {
//                blueLed = blueLed - .1;
//            }
//            if(greenDirection === "up"){
//                greenLed = greenLed + .1;
//            } else {
//                greenLed = greenLed - .1;
//            }
//           piblaster.setPwm(17, roundNumber(redLed,1));
//           piblaster.setPwm(27, roundNumber(greenLed,1));
//           piblaster.setPwm(18, roundNumber(blueLed,1));
//            console.log("changes = R:"+roundNumber(redLed,1)+" G:"+roundNumber(greenLed,1)+" B:"+roundNumber(blueLed,1));
//            counter = counter + 1;
//        //},1000);
//    }
//
})();