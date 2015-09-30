(function(){
    "use strict";

    var Gpio = require("onoff").Gpio,
        laser = new Gpio(17, "out"),
        exit,
        toggleLaser,
        loop;
    toggleLaser = function(){
        laser.writeSync(laser.readSync() ^ 1);
        console.log("laser = " + laser.readSync());
    }
    loop = function () {
        var rand = Math.round(Math.random() * (2000 - 100)) + 100;
        setTimeout(function () {
            toggleLaser();
            loop();
        }, rand);
    };

        loop();

    exit = function () {
        laser.unexport();
        process.exit();
    }

    process.on("SIGINT",exit);

})();