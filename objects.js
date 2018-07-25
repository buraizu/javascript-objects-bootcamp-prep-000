var playlist = {
  Slowdive: 'Alison'
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}

In package.json change this: "mocha-jsdom": "^1.1.0", to "mocha-jsdom": "~1.1.0", and run npm install