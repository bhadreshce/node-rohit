const express = require('express');
const hbs = require('hbs')
const app = express();
const path = require('path');
const port = 3000
const viewPath = path.join(__dirname, './views')
const public = path.join(__dirname, './public')
const partial = path.join(__dirname, './partials')

app.set('view engine', 'hbs')
app.set('views', viewPath)
app.use(express.static(public))
hbs.registerPartials(partial)


// app.set("view engine","hbs")
// app.set("views", viewPath)
// hbs.registerPartials(partialPath)
// app.use(express.static(publicPath))


app.get('/', (req, res) => {
    res.render('home', {
        title: 'Home Page',
        name: 'John Doe',
        items: ['Item 1', 'Item 2', 'Item 3']
    })
})

app.get('/contact', () => (req, res) => {
    res.render('contact', {
        title: 'Home Page',
        name: 'John Doe',
        items: ['Item 1', 'Item 2', 'Item 3']
    })
})

app.listen(port, () => {
    console.log('listening on port');
})