console.log("this is liri");
require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
// var request = require("request");
// var fs = require("fs");

var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var omdb = require("omdb");
var bit_js = require('bit_js');

var command = process.argv[2];
    console.log(process.argv);
var search = process.argv[3];
    console.log(process.argv[3]);

// var callArtist = function (artist) {
//     return artist.name;
// }

var callSpotify = function () {
    if (search === undefined) {
        search = "Happy";

    }
    spotify.search({ type: 'track', query: search }, function(err, data) {
        if (err) {
      return console.log('Error occurred: ' + err);
        }
        // console.log(data.tracks.items[0]); 

        // if (search != undefined) {
        // var songTitle = data.tracks.items[0].name;
        // var artistName = data.tracks.items[0].artists[0].name;
        // var previewURL = data.tracks.items[0].preview_url
        // }

        // var songs = data.tracks.items[0];
        //     for (var i = 0; i < songs.length; i++);
                if (search != undefined) {
                console.log("title: " + data.tracks.items[0].name)
                console.log("Artist " + data.tracks.items[0].artists[0].name);
                console.log("Song " + data.tracks.items[0].name);
                console.log("Preview song: " + data.tracks.items[0].preview_url);
                // console.log("Album " + songs[i].album.name);
                }
    });

}

var callBands = function (artists) {
    if (search === undefined) {
        search = "Cher";

    }
    var queryUrl = "https://rest.bandsintown.com/artists/" + artists + "/events?app_id=codingbootcamp"
    axios.get(queryUrl)
    .then(function (response) {
        for (i = 0; i < response.length; i++);
        console.log(response);
        console.log("Venue " + response.data[0].venue.name);
        console.log("Location " + response.data[i].venue.region);
        console.log("Date of Event: " + response.data[i].datetime);


    })
        .catch(function (error) {
            console.log(error);
        })
}
    

//   var callOmdb = function (movie) {
//     if (song === undefined) {
//         song = "Happy";

//     }
// }
  
  if (command === "spotify-this-song") {
      console.log("spotify");
    //   console.log(callSpotify);
      callSpotify(search);
  }
  else if (command === "concert-this") {
      console.log(callBands);
      callBands(search);
  }

  else if (command === "movie-this") {
      console.log(callOmdb);
      callOmdb(search);
  }