var mqtt = require('mqtt');

//var client = mqtt.createClient(1883, '0.0.0.0'); //createClient is deprecated, use connect instead
var client = mqtt.connect('mqtt://0.0.0.0:8080');
//var client = mqtt.connect('mqtt://mosquitos-zubiri.c9users.io:8080');



console.log('Client publishing.. ');
client.on('connect', function () {
    client.subscribe('presence');
});

client.publish('presence', 'Client 1 is alive.. Test Ping! ' + Date());

// client.end();