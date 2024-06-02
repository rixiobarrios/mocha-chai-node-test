// //Load express module with `require` directive
// const express = require('fix-esm').require('express');
// const app = express();

// //Define request response in root URL (/)
// app.get('/', function (req, res) {
//     res.send('Hello World');
// });

// //Launch listening server on port 3000
// app.listen(3000, function () {
//     console.log('App listening on port 3000!');
// });

// Import express module using ES6 import
import express from 'express';

const app = express();

// Define request response in root URL (/)
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Launch listening server on port 3000
app.listen(3000, () => {
    console.log('App listening on port 3000!');
});
