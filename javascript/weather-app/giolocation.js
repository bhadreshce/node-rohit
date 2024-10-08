const axios = require('axios');

const gio = (location, callback) => {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${location}&key=524d083ba8b1473a95f2239ca9089d9c`;

    axios.get(url)
        .then((result) => {
            if (result.data && result.data.results && result.data.results.length > 0) {
                // Send the geometry data to the callback
                callback(result.data.results[0].geometry, undefined);
            } else {
                callback(undefined, 'No location data found.');
            }
        })
        .catch((error) => {
            callback(undefined, 'Error fetching geolocation data: ' + error.message);
        });
};

module.exports = { gio };