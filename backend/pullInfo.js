const fs = require('fs')
const SpotifyWebApi = require('spotify-web-api-node');
const token = "BQBePLlXVJk24WwKVTs904KLFW5TA5VccDv2-4Fz-xB13lspMvEdIMWibqosl0DSK3ecBl1wLwpoFhFYw9p8R-ECDCL72Xb_lp_QLMCY3o1pITQOAbn48kIbGUoELwXmta9pzLeYvvmqDVC7y_-IAMh3Z8GwbWS1Xof353xdrR4ZyL5w4wryF0oGGU_oECh8AAt7EY6KUdGHvvAp4GpCnz_E_OY0mWfHZLLU2BWunxTyu7pXAAXpgoi-vaunqcZbdMhuCCw6iXbrDEbnevHFWquEAkI";

const spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(token);

//GET MY PROFILE DATA
function getMyData() {
  (async () => {
    const me = await spotifyApi.getMe();
    // console.log(me.body);
    getMyCurrentPlayingTrack(me.body.id);
  })().catch(e => {
    console.error(e);
  });
}

//GET MY PLAYLISTS
// async function getUserPlaylists(userName) {
//   const data = await spotifyApi.getUserPlaylists(userName)

//   console.log("---------------+++++++++++++++++++++++++")
//   let playlists = []

//   for (let playlist of data.body.items) {
//     console.log(playlist.name + " " + playlist.id)
    
//     let tracks = await getPlaylistTracks(playlist.id, playlist.name);
//     // console.log(tracks);

//     const tracksJSON = { tracks }
//     let data = JSON.stringify(tracksJSON);
//     fs.writeFileSync(playlist.name+'.json', data);
//   }
// }

// //GET SONGS FROM PLAYLIST
// async function getPlaylistTracks(playlistId, playlistName) {

//   const data = await spotifyApi.getPlaylistTracks(playlistId, {
//     offset: 1,
//     limit: 100,
//     fields: 'items'
//   })

//   // console.log('The playlist contains these tracks', data.body);
//   // console.log('The playlist contains these tracks: ', data.body.items[0].track);
//   // console.log("'" + playlistName + "'" + ' contains these tracks:');
//   let tracks = [];

//   for (let track_obj of data.body.items) {
//     const track = track_obj.track
//     tracks.push(track);
//     console.log(track.name + " : " + track.artists[0].name)
//   }
  
//   console.log("---------------+++++++++++++++++++++++++")
//   return tracks;
// }

//GET MY PLAYLISTS
async function getMyCurrentPlayingTrack(userName) {
    const data = await spotifyApi.getMyCurrentPlayingTrack()
    .then(function(data) {
      console.log('Now playing: ' + data.body.item.name);
    }, function(err) {
      console.log('Something went wrong!', err);
    });
  
    console.log("---------------+++++++++++++++++++++++++")
  }

getMyData();