(function(){
    "use strict";

    var Gpio = require("onoff").Gpio,
        relay = new Gpio(17, "out"),
        exit;

    setInterval(function (){
            relay.writeSync(relay.readSync() ^ 1);
            console.log("relay = " + relay.readSync());
    },2000);

    exit = function () {
        relay.unexport();
        process.exit();
    }

    process.on("SIGINT",exit);

})();