const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const homePath = path.join(__dirname, 'index.html');

const contactPath = path.join(__dirname, 'contact.html')

console.log(homePath);

app.get('/', (req, res) => {

    res.sendFile(homePath)
})

app.get('/contact', (req, res) => {
    res.sendFile(contactPath)

})





app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
    // logs a message when the server is running
})
