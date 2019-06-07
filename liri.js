require("dotenv").config()
var Spotify = require('node-spotify-api');
var keys = require("./keys")
var axios = require('axios')
var moment = require('moment')
moment().format();

var movieQuery = "lion king"
var bandQuery = "Gap band"

var command = process.argv[2];
var input = process.argv[3];

if (command === "spotify-this-song") {
    spotifyThisSong(input)
} else if (command === "movie-this") {
    movieThis(input)
} else if (command === "band-this") {
    bandThis(input)
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
        console.log(JSON.stringify(data, null, 2))
        console.log(data.track.items[0].artists)


    });

}
function bandThis(bandQuery) {

    var queryUrl = "https://rest.bandsintown.com/artists/" + bandQuery + "/events?app_id=codingbootcamp";
    console.log();

    axios.get(queryUrl).then(
        function (response) {
            console.log(response.data)
            console.log("venue name: " + response.data[0].venue.name);
            console.log("venuecity:" + response.data[0].venue.city);
            console.log("datetime:" + moment.data.datetime).format("MM/DD/YYYY");

        }
    );
}





function movieThis(movieQuery) {
    if (movieQuery === undefined || null) {
        movieQuery = "Mr.Nobody";
    }
    var queryUrl = "http://www.omdbapi.com/?t=" + movieQuery + "&apikey=5c60fd8d";

    // queryUrl
    console.log(queryUrl);

    axios.get(queryUrl).then(
        function (response) {
            console.log("Release Year: " + response.data.Year);
            console.log(response.data)
            console.log("Title :" + response.data.Title);
            console.log("IMDB :" + response.data.imdbRating);
            console.log("Rotten Tomatoes :" + response.data.Ratings[1].Value);
            console.log("Country :" + response.data.Country);
            console.log("Language :" + response.data.Language);
            console.log("Actors :" + response.data.Actors);
            console.log("Movie Plot :" + response.data.Plot);
        }
    );

}




// request(queryUrl, function (error, response, body) {
//     // hopefully it works
//     if (err && response.statusCode === 100) {
//         let concertData = JSON.parse(body);

//         let concertDT = concertData[0].datetime
//         let momentDT = moment().format('l')


//     }


// });






