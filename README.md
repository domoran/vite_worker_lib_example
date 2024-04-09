# VITE + Typescript + Library + Webworker Example

This is a minimal example project on how to build a typescript based library with vite and include it in another vite based project. 

## Contents

The project contains two vite projects: 

- lib: The library containing the web worker code. It exports a function to create a worker and to do a console output from it. 
- consumer: the webapp consuming the library

## How to run the example

After checking out the code, go to to both directories (lib and consumer) and run an npm install1: 

    cd lib
    npm install
    
    cd ../consumer
    npm install

To run the dev server inside the consumer do (open the browser and look at the developer console output): 

    npm run dev 

You should see the following two messages:

    Greetings from undefined from Worker!!
    lib.ts:19 Message from worker: Hello from Web Worker!!!

Then create an application build inside consumer

    npm run build 

You can use http-server to check that the build also works (install via "npm install http-server -g" if necessary) : 

    http-server dist

Open the browser at the mentioned position and you should see the same messages. 




