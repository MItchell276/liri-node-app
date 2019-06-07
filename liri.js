require("dotenv").config()
var Spotify = require('node-spotify-api');
var keys = require("./keys")

var command = process.argv[2];
var input = process.argv[3];

if (command === "spotify-this-song") {
    spotifyThisSong(input)
} else if (command === "movie-this") {

}

function spotifyThisSong(musicSearch) {
    var spotify = new Spotify({
        id: keys.spotify.id,
        secret: keys.spotify.secrect
    });

    spotify.search({ type: 'track', query: musicSearch }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        console.log(JSON.stringify(data, null, 2));
    });

}

function movieThis(movieQuery) {
    axios.get('/user?ID=12345')
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}




