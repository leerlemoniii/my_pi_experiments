(function(){
    "use strict";

    var Gpio = require('onoff').Gpio,
        redled = new Gpio(17, 'out'),
        greenled = new Gpio(18, "out"),
        iv;
    redled.writeSync(1);
    iv = setInterval(function () {
        redled.writeSync(redled.readSync() ^ 1);
        greenled.writeSync(greenled.readSync() ^ 1);
    }, 100);

    setTimeout(function () {
        clearInterval(iv);

        redled.writeSync(0);
        redled.unexport();
        greenled.writeSync(0);
        greenled.unexport();
        console.log('ok - ' + __filename);
    }, 10000);
})();