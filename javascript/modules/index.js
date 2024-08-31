// os
// custom module 
// third party MODULES
// inbuild module
const os = require('os');

// console.log(os.version());
// console.log(os.arch());
// console.log(os.EOL);
// console.log(os.platform());
// console.log(os.hostname());
// console.log(os.homedir());
// console.log(os.release());

// const events = require('events')

// const eventsService = new events.EventEmitter()

// eventsService.on('event1', () => {
//     console.log('hii this event is fired');
// })

// setInterval(() => {
//     eventsService.emit('event1')
// }, 10000)


// path 

const path = require('path')

// Joining paths
const filePath = path.join('/home', 'rohit', 'documents', 'work.txt');
// console.log(filePath);

// Base name
// const baseName = path.basename(filePath);
// console.log(baseName);

// // Directory name
// const dirName = path.dirname(filePath);
// console.log(dirName);

// Extension
// const ext = path.extname(filePath);
// console.log(ext);

// Parse
// const parsedPath = path.parse(filePath);
// console.log(parsedPath);

// crypto
// dns
// domain
// url
// 2


// fs

const fs = require('fs');

// sync filesystem
// let f = fs.writeFileSync(`file.txt`, 'this is a new file text');


let read = fs.readFileSync(`file.txt`, 'utf-8')
// console.log(read);

fs.appendFileSync(`file.txt`, 'added')

fs.unlinkSync(`file.txt`)


// const fs = require('fs');
// const path = require('path');

// const folderPath = __dirname; // Current folder

// fs.readdir(folderPath, (err, files) => {
//     if (err) {
//         return console.error('Unable to scan directory: ' + err);
//     }
//     // Listing all files
//     files.forEach(file => {
//         const filePath = path.join(folderPath, file);
//         if (fs.statSync(filePath).isFile()) {
//             console.log(file);
//         }
//     });
// });