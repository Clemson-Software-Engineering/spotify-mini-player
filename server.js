const express = require('express'); // Express web server framework
const request = require('request'); // "Request" library
const cors = require('cors');
const querystring = require('querystring');
const cookieParser = require('cookie-parser');
const https = require('https');
const fs = require('fs');

const client_id = process.env.SPOTIFY_CLIENT_ID; // Your client id
const client_hidden_info = process.env.SPOTIFY_CLIENT_HIDDEN_INFO; // client hidden information
const redirect_uri = process.env.SPOTIFY_REDIRECT_URL; // Your redirect uri

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
const randomStringGenerator = length => {
  let text = '';
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i += 1) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

const stateKey = 'spotify_auth_state';

const app = express();

app
  .use(express.static(`${__dirname}/public`))
  .use(cors())
  .use(cookieParser());

app.get('/login', (req, res) => {
  const state = randomStringGenerator(16);
  res.cookie(stateKey, state);

  // your application requests authorization
  const scope =
    'user-follow-read user-read-recently-played user-library-read user-read-playback-state user-library-modify user-read-currently-playing user-modify-playback-state user-follow-modify playlist-read-collaborative playlist-modify-private playlist-modify-public user-read-email playlist-read-private user-top-read user-read-private app-remote-control';
  res.redirect(
    `https://accounts.spotify.com/authorize?${querystring.stringify({
      response_type: 'code',
      client_id,
      scope,
      redirect_uri,
      state,
    })}`
  );
});

