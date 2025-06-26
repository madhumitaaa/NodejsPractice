const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('waterfull', () => {
  console.log('turn off the tap!');
  setTimeout(()=>{
    console.log('please turn ff,its a gentle reminder');
  },3000)
});
console.log("script is running")
myEmitter.emit('waterfull');
console.log("script is still running")