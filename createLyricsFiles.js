// const fs = require('fs');
// const path = require('path');

// // Import the playlist from defaultPlaylist.js
// const { playlist } = require('./defaultPlaylist');

// // Define the path to the lyrics folder
// const lyricsFolder = path.join(__dirname, 'lyrics');

// // Create the lyrics folder if it doesn't exist
// if (!fs.existsSync(lyricsFolder)) {
//     fs.mkdirSync(lyricsFolder);
// }

// // Create a text file for each song in the playlist
// playlist.forEach(song => {
//     const filePath = path.join(lyricsFolder, `${song.lyrics}.txt`);
//     fs.writeFileSync(filePath, song.lyrics);
//     console.log(`Created ${song.lyrics}.txt`);
// });

const fs = require('fs');
const path = require('path');

// Import the playlist from defaultPlaylist.js
const { playlist } = require('./defaultPlaylist');

// Define the path to the lyrics folder
const lyricsFolder = path.join(__dirname, 'lyrics');

// Create the lyrics folder if it doesn't exist
if (!fs.existsSync(lyricsFolder)) {
    fs.mkdirSync(lyricsFolder);
}

// Create a text file for each song in the playlist
playlist.forEach(song => {
    const filePath = path.join(lyricsFolder, `${song.lyrics}.txt`);
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, song.lyrics);
        console.log(`Created ${song.lyrics}.txt`);
    } else {
        console.log(`${song.lyrics}.txt already exists, skipping...`);
    }
});