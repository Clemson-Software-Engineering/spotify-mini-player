const fs = require('fs')
const SpotifyWebApi = require('spotify-web-api-node');
const token = "BQBQV-JQUQ0y2LZbLhcUSEm2XTcGJYaN3lAHAc1Gv_4uWL_uFav3AZgy-z4mBtmeFe_mSo4x1-1vnO8MZlenP7qCJ5JuVGwlH91T6h9F0QiNPjQ2CE-mJJyRrLVsf9kZBKeGXsYZQLEyboz8P_oJgYrtfNMWxXfAR8OmPqepdmTtibCJL1Y1h3NqrfLOeo2IjX-RwmjQt3ZoKIJ_BaEY9NDltPMHeUQtiwOIlGAPv276gqujIv7x9tNxrq9R6JWqKe6CuVCK3HH8g--qIBQaC6tRlUc";

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

//   console.log("++++++++++++++++++++++++++++++++++++++++")
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
  
    console.log("+++++++++++++++++++++++++++++++++++++")
  }

getMyData();