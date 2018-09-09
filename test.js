'use strict'

function logCar(logMsg, callback) {
    process.nextTick(function() {
        callback(logMsg);
    })
}


var cars = ["Ferrari", "Porsche", "Bucatti"];
for(var idx in cars) {
    var message = "Saw a " + cars[idx];
    logCar(message, function() {
        console.log("Normal Callback:" + message);
    })
}


for(var x in cars) {
    var message = "Saw a " + cars[x];
    (function(msg){
        logCar(msg, function() {
            console.log("Closure Callback: " + msg);
        })
    })(message)
}


(function(payLoad) {
    difefeefe
});

