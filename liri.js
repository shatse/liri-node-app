require("dotenv").config();

var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

var searchItem = process.argv[2];
var searchResult = process.argv.slice(3).join(" ");

const fs = require('fs');
const axios = require('axios');
const moment = require('moment');
const Spotify = require('node-spotify-api');

switch (searchItem) {
    case "concert-this":
        console.log('concert-this');
        break;
    case "spotify-this-song":
        console.log('spotify-this-song');
        break;
    case "movie-this":
        console.log('movie-this');
        break;
    case "do-what-it-says":
        console.log('do-what-it-says');
        break;
}


