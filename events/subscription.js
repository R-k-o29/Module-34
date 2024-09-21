const EventEmitter = require('node:events');

const emitter = new EventEmitter();

// emitter.on("subscribe",(channel)=>{
//     console.log(`Thanks for subscribing to ${channel}`);
// })

emitter.emit("subscribe","College Wallah")