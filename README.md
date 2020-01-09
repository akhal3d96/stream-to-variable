# Stream Buffer

 Many libraries pass their output to a stream such as (process.stdout or a file stream). Sometimes you don't have any streams to be pass the output to and just want to have the output stream stored in variable. This is the solution.


 ## Usage

 It's dead simple

 ```javascript
 const StreamBuffer = require('stream-to-variable')
 
 const myStream = new StreamBuffer() /* You have a writable stream now */

 someFunctionThatWritesToAStream(myStream)
/*
 ...
*/
console.log(myStream.buffer) /* Dead simple, see? */
 ```