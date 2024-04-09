import { type Prefix } from "./utils";

import MyWorker from './webworker?worker'

export function hello(): void {
  console.log("Hello World!");
}

export function makeWorker() {
  // Creating a new Worker instance by passing the path to the worker script
  // const worker = new Worker(new URL("./webworker.ts", import.meta.url))
  const worker = new MyWorker();

  // Sending a message to the worker
  worker.postMessage("Hello from main thread!");

  // Listening for messages from the worker
  worker.onmessage = function (event: MessageEvent<Prefix>) {
    console.log("Message from worker:", event.data);
  };
}
