var mqtt = require('mqtt');

//var client = mqtt.createClient(1883, 'localhost'); //createClient is deprecated, use connect instead
var client = mqtt.connect('mqtt://0.0.0.0:8080');

client.on('connect', function(topic, message) {
    client.subscribe('presence');
});    

client.on('message', function(topic, message) {
    console.log("message: "+message);
});

console.log('Client started...');