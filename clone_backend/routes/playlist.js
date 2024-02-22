const express = require("express");
const passport = require("passport");
const Playlist = require("../models/Playlist");
const User = require("../models/User");
const Song = require("../models/Song");
const router = express.Router();

//Route 1: Create a playlist  

router.post(
  "/create",
  passport.authenticate("jwt",{session: false}),
  async (req,res)=> {
    const currentUser = req.user;
    const {name,thumbnail,Songs} = req.body;
    if(!name || !thumbnail || !Songs){
        return res.status(301).json({err:"Insufficient data"});
    }
    const playlistData = {
        name,
        thumbnail,
        songs,
        owner : currentUser._id,
        collaborators : [],
    };
    const playlist = await PlaylistModel.create(playlistData);
    return res.status(200).json(playlist);
  }
);

//Route 2: Get a playlist by ID --> We will get the playlist ID as a route parameter and we will return the playlist having that ID

router.get(
    "/get/playlist/:playlistId",                                     //Significance of ':' is that it will become a variable and now any value can be assign to it.
    passport.authenticate("jwt",{session: false}),
    async (req,res) => {
        const playlistId = req.params.playlistId;

        const playlist = await Playlist.findOne({_id: playlistId});
        if(!playlist){
            return res.status(301).json({err: "Invalid ID"});
        }
        return res.status(200).json(playlist);
    }
);

//Get all playlist made by an artist

router.get(
    "/get/artist/:artistId",
    passport.authenticate("jwt",{session: false}),
    async (req,res) => {
        const artistId = req.params.artistId;

        const artist = await User.findOne({_id: artistId});
        if(!artist){
            return res.status(304).json({err: "Invalid artist ID"});
        }

        const playlists = await Playlist.find({owner: artistID});
        return res.status(200).json({data : playlists});
    }
);

//Add a song to a playlist

router.get(
    "/add/song",
    passport.authenticate("jwt",{session: false}),
    async (req,res) => {
        const currentUser = req. user;
        const {playlistId, songId} = req.body;
        //step 0 : Get the playlist if valid
        const playlist = await Playlist.findOne({_id: playlist});
        if(!playlist){
            return res.status(304).json({err: "Playlist does not exist"});
        }
        //step 1 : Check if the currentuser owns the playlist or a collaborator
        if(
            playlist.owner.equals(currentUser._id) &&
            !playlist.collaborators.includes(currentUser._id)
        ){
            return res.status(400).json({err:"Not Allowed"});
        }
        //step 2: Check if the Song is valid
        const song = await Song.findOne({_id: songId});
        if(!song){
            return res.status(304).json({err: "Song invalid"});
        }

        //Now we can simply add the song
        playlist.song.push(songId);
        await playlist.save();

        return res.status(200).json(playlist); 
    }
);

module.exports = router;