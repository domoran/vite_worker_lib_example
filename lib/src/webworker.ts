import { type Prefix, greet } from './utils'

// Listening for messages from the main thread
self.onmessage = function(event: MessageEvent<Prefix>) {
    greet(event.data.name + ' from Worker!')
  
    // Sending a response back to the main thread
    self.postMessage('Hello from Web Worker!!!');
  };