const mongoose = require("mongoose");

const Playlist = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    thumbnail : {
        type : String,
        required : true,
    },
    owner : {
        type : mongoose.Types.ObjectId,
        ref : "user",
    },
    //1. Which songs are on the playlist
    //2. Playlist collaborators
    songs : [
        {
            type : mongoose.Types.ObjectId,
            ref : "song",
        },
    ],
    collaborators : [
        {
            type : mongoose.Types.ObjectId,
            ref : "user",
        },
    ],
});

const PlaylistModel = mongoose.model("Playlist",Playlist);

module.exports = PlaylistModel;