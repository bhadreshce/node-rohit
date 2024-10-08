const express = require('express');
const hbs = require('hbs')
const app = express();
const path = require('path');
const port = 3000
const viewPath = path.join(__dirname, './views')
const public = path.join(__dirname, './public')
const partial = path.join(__dirname, './partials')
const giolocation = require('./giolocation');
const getWeather = require('./weather')
// settings 
app.set('view engine', 'hbs')
app.set('views', viewPath)
app.use(express.static(public))
hbs.registerPartials(partial)

// for get data from front end 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/weather', (req, res) => {
    res.render('weather')
})

// app.get('/getdata', (req, res) => {
//     const location = req.query.location;
//     console.log(location);

//     giolocation.gio(location, (result, error) => {
//         if (error) {
//             return res.send({ error: error })
//         } else {
//             console.log(result);
//             // getWeather.getWeather(result, (res, error) => {
//             //     res.send({
//             //         name: "bhadresh"
//             //     })
//             // })
//         }
//     })

// })


app.get('/getdata', (req, res) => {
    const location = req.query.location;
    console.log(location);

    giolocation.gio(location, (result, error) => {
        if (error) {
            return res.send({ error: error });
        } else {
            console.log('my lat long', result);
            // You can now use the `result` to fetch the weather or do something else
            // For example:
            getWeather.getWeather(result, (weatherResult, error) => {
                if (error) {
                    return res.send({ error: error });
                }
                res.send(weatherResult);
            });

            // Temporary response with geolocation data
            // res.send(result);
        }
    });
});



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
    // logs a message when the server is running
})
