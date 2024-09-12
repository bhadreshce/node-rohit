const express = require('express');
const hbs = require('hbs')
const app = express();
const path = require('path');
const port = 3000
const viewPath = path.join(__dirname, './views')
const public = path.join(__dirname, './public')
const partial = path.join(__dirname, './partials')

// settings 
app.set('view engine', 'hbs')
app.set('views', viewPath)
app.use(express.static(public))
hbs.registerPartials(partial)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/weather', (req, res) => {
    res.render('weather')
})


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
    // logs a message when the server is running
})
