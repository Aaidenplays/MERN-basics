// const express = require('express');
// const app = express();

// app.get('/', (req,res) => {
//     res.send("hey whatsup from express")
// });

// app.listen(3000);

// const data = fs.readFileSync(fileName);
// console.log(data.toString())

const fs = require('fs');
const fileName = "./target.txt"

const errHandler = err => console.log(err);

const dataHandler = data => console.log(data.toString())

fs.watch(fileName, () => console.log(`file changed!`))
fs.readFileSync(fileName, (err, data) => {
    if (err) errHandler(err);
    else dataHandler(data);
});

console.log('node js async programming');

// const {sum} = require('./helpers');
// const http = require('http');



// const total = sum(10, 200)
// console.log('TOTAL: ', total)

// const server = http.createServer((req, res) => {
//     res.end("hello world from nodessjss")
// })
// server.listen(3000);