const  Abc = require('events');

class Pqr extends Abc {}

const Emitter = new Pqr();
Emitter.on('Waterfull', () => {
  console.log('Please turn off the motor!');
  setTimeout(()=> {
    },30000)
});
console.log("The script is running")
Emitter.emit('Waterfull'); 
console.log("The script s still running ")
