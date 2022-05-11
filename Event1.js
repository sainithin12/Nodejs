var event1 = require('events');

var eventemitter = new event1.EventEmitter();

var eventhandler= function() {
	console.log('This is event');
}

var eventhandler1 = function() {
	console.log('This is second Event');
}

var eventhandler2 = function() {
	console.log ('This is third event');
}


eventemitter.setMaxListeners(0);
eventemitter.on('praveen1',eventhandler2);
eventemitter.on('praveen1',eventhandler);

eventemitter.on('praveen2', eventhandler);
eventemitter.on('praveen2', eventhandler1);
console.log(eventemitter.listeners('praveen1'));

console.log(event1.listenerCount(eventemitter,'praveen2'));


eventemitter.emit('praveen1');

eventemitter.emit('praveen2');