// let currentPlaylistId = 1;

// let currentPlaylist = playlistsMain.find(playlist => playlist.id === currentPlaylistId);

// Default playlist is set to the playlist variable
let currentPlaylist = playlist; // Default playlist


// Function to switch between different playlists
// function switchPlaylist(newPlaylist) {
//     currentPlaylist = newPlaylist; // Update the active playlist
//     // currentTrackIndex = index;     // Set the current track index
// }

let currentTrackIndex = 0;  // Default track index
let isPlaying = false;      // Flag to track if music is playing

let audio = new Audio();    // Create a new Audio object for playback
let currentSong;            // To store the current song being played

let isShuffle = false;
let isRepeat = false;





// Element references for displaying track information and controls
const nowPlayingTitle = document.querySelector('.track-title');
const nowPlayingArtist = document.querySelector('.track-artist');
const nowPlayingCover = document.querySelector('.track-info img');
const playPauseIcon = document.getElementById('play-pause-icon');
const progressSlider = document.getElementById('progress-slider');
const currentTimeElement = document.getElementById('current-time');
const durationElement = document.getElementById('duration');
const sidebar = document.querySelector('.current-song-cover img');
const artistImg = document.querySelector('.artist-img');
const songName = document.querySelector('.song-name');
const artistName = document.querySelector('.artist-name')


// Function to set the current song (for download button)
function setCurrentSong(track) {
    currentSong = track;
}


function updateMediaMetadata(song) {
    if ('mediaSession' in navigator) {
        navigator.mediaSession.metadata = new MediaMetadata({
            title: song.title, // Replace with song.title from your data
            artist: song.artist,
            // album: song.album,
            artwork: [
                { src: song.cover, sizes: '96x96', type: detectImageType(song.cover) },
                { src: song.cover, sizes: '128x128', type: detectImageType(song.cover) },
                { src: song.cover, sizes: '256x256', type: detectImageType(song.cover) },
                { src: song.cover, sizes: '512x512', type: detectImageType(song.cover) },
            ]
        });
    }
}

// Utility function to detect the image type from the file extension
function detectImageType(url) {
    const extension = url.split('.').pop().toLowerCase();
    switch (extension) {
        case 'jpg':
        case 'jpeg':
            return 'image/jpeg';
        case 'png':
            return 'image/png';
        case 'gif':
            return 'image/gif';
        case 'webp':
            return 'image/webp';
        case 'bmp':
            return 'image/bmp';
        case 'svg':
            return 'image/svg+xml';
        default:
            return 'image/*'; // Fallback for unknown types
    }
}


navigator.mediaSession.setActionHandler('play', () => {
    // Play the song
    audio.play();
});

navigator.mediaSession.setActionHandler('pause', () => {
    // Pause the song
    audio.pause();
});

navigator.mediaSession.setActionHandler('nexttrack', () => {
    // Play the next song
    nextTrack();
});

navigator.mediaSession.setActionHandler('previoustrack', () => {
    // Play the previous song
    prevTrack();
});




// Add event listener for the download button
document.getElementById("download-button").addEventListener("click", () => {
    // Check if there is a song being played and if it has an audio source
    if (currentSong && currentSong.audio) {
        const link = document.createElement("a");
        link.href = currentSong.audio;
        link.download = `${currentSong.title}.mp3`; // Suggest the file name based on the song title
        document.body.appendChild(link); //add the link element
        link.click(); // Trigger the download
        document.body.removeChild(link); // Clean up the link element
    } else {
        alert("No song is currently playing.");  // Alert the user if no song is playing
    }
});
;

// Function to play the selected song and update the display
function playSong(audioFile) {
    audio.src = audioFile; // Set the audio source
    audio.play();           // Start playback
    isPlaying = true;       // Update the play state
    playPauseIcon.innerHTML = '<use href="#pause-icon"></use>';  // Update play/pause icon

    // Get track details and update UI
    const track = currentPlaylist.find(song => song.audio === audioFile);
    nowPlayingTitle.textContent = track.title;
    nowPlayingArtist.textContent = track.artist;
    nowPlayingCover.src = track.cover;
    sidebar.src = track.cover;
    sidebar.style.backgroundSize = "cover";
    sidebar.style.backgroundPosition = "center";
    sidebar.style.borderRadius = "8px";
    sidebar.style.width = "100%";
    artistImg.src = track.artistPhoto;
    songName.textContent = track.title;
    artistName.textContent = track.artist;
    // currentTrackIndex = trackIndex;
    // Update the track's metadata when loaded
    audio.onloadedmetadata = () => {
        durationElement.textContent = formatTime(audio.duration);
        progressSlider.max = Math.floor(audio.duration);
    };
}

// Function to toggle play/pause
function togglePlayPause() {
    if (isPlaying) {
        audio.pause();  // Pause the audio
        playPauseIcon.innerHTML = '<use href="#play-icon"></use>'; // Update icon
        isPlaying = false;
    } else {
        audio.play();   // Resume playback
        playPauseIcon.innerHTML = '<use href="#pause-icon"></use>'; // Update icon
        isPlaying = true;
    }
}


// Function to set the volume
function setVolume() {
    audio.volume = document.querySelector('.volume-control input').value / 100;
}

// Function to format time in minutes:seconds
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// Update progress slider and current time display during playback
audio.ontimeupdate = () => {
    progressSlider.value = Math.floor(audio.currentTime); // Update slider value
    currentTimeElement.textContent = formatTime(audio.currentTime);  // Update current time
};

// Change track position when the progress slider is moved
progressSlider.oninput = () => {
    audio.currentTime = progressSlider.value;  // Update track position
};

// Load the first track initially
loadTrack(currentTrackIndex);

// Event listeners for playback control icons (previous, play/pause, next)
document.querySelector('.playback-controls svg:nth-child(1)').onclick = prevTrack;
document.querySelector('.playback-controls svg:nth-child(2)').onclick = togglePlayPause;
document.querySelector('.playback-controls svg:nth-child(3)').onclick = nextTrack;

// Automatically play the next track when the current one ends
audio.onended = () => {
    nextTrack(); // Play the next track when the current one finishes
};

// Event listener for showing lyrics
const btnLyrics = document.querySelector('.show-lyrics');
const showLyrics = document.querySelector('.lyrics-container');

btnLyrics.addEventListener("click", () => {
    if(showLyrics.style.display == "none"){
        mainPlaySection.style.display = "none";
        defaultContent.style.display = "none";
        showLyrics.style.display = "block";
        songDetails.style.display = "block";
        songResults.style.display = "none";
    }
    else{
        mainPlaySection.style.display = "block"; // Hide the main play section
        defaultContent.style.display = "block";
        showLyrics.style.display = "none";  // Show the lyrics section
        songDetails.style.display = "none";
        songResults.style.display = "block";
    }
   
});






const displayLibrary = document.querySelector('.show-library');

// Access the elements
const sidebar1 = document.querySelector('.sidebar1');
const sidebar2 = document.querySelector('.sidebar2')
const main = document.querySelector('main');


displayLibrary.addEventListener("click",()=>{
    main.style.display= "none";
    sidebar1.style.display="block";
    sidebar1.style.flex="0 0 100%";
})


//...................................................................................................................................................................................
// Select the elements
const homeButton = document.querySelector(".home");
const songResults = document.querySelector(".song-results");
const defaultContent = document.querySelector(".default-content");
const searchBtn = document.querySelector(".search-btn");

searchBtn.addEventListener("click", () => {
    
    if (songResults.style.display === "none") {
        // Show song results and hide default content
        songResults.style.display = "block";  // or 'block' depending on the layout
        defaultContent.style.display = "none";
    } else {
        // Show default content and hide song results
        songResults.style.display = "none";
        defaultContent.style.display = "block";
    }
});

document.getElementById("search-btn").addEventListener("click", function() {
    
    const query = document.getElementById("search-bar").value.toLowerCase();
    if(query) {
        const results = playlist.filter(song => 
            (song.title?.toLowerCase() || "").includes(query) ||
            (song.artist?.toLowerCase() || "").includes(query) ||
            (song.searchString?.toLowerCase() || "").includes(query)
        );
        displayResults(results);
    }
});


             
const searchInput = document.getElementById('search-bar');
searchInput.addEventListener('input',function() {
    // const query = document.getElementById("search-bar").value.toLowerCase();
    document.getElementById("search-btn").click();
   
});

// Optional: Allow Enter key to trigger search
document.getElementById("search-bar").addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
        
        document.getElementById("search-btn").click();
    } 
    
});

// Listen for keyboard events
document.addEventListener('keydown', function(event) {

    const activeElement = document.activeElement;
    if (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA') {
                // Do nothing if the focus is in a text input or textarea
                return;
    }
    if (event.key === ' ') {
        // Spacebar pressed, toggle play/pause
        if (isPlaying) {
            audio.pause();
            playPauseIcon.innerHTML = '<use href="#play-icon"></use>';
            isPlaying = false;
        } else {
            audio.play();
            playPauseIcon.innerHTML = '<use href="#pause-icon"></use>';
            isPlaying = true;
        }
    } else if (event.key === 'ArrowRight') {
        // Right arrow key pressed, play the next song
        nextTrack();
    } else if (event.key === 'ArrowLeft') {
        // Left arrow key pressed, play the previous song
        prevTrack();
    }
});

function displayResults(results) {
    currentPlaylist = results;
    const resultsContainer = document.querySelector(".song-results");
    resultsContainer.innerHTML = ''; // Clear previous results
    if (results.length > 0) {
        results.forEach(song => {
            const songDiv = document.createElement("div");
            songDiv.classList.add("song-results");

            const songImage = document.createElement("img");
            songImage.src = song.cover;
            songImage.alt = song.title;
            songDiv.appendChild(songImage);
            const songMeta = document.createElement("div");
            songDiv.appendChild(songMeta);
            const songTitle = document.createElement("h3");
            songTitle.textContent = `${song.title}`;
            const songArtist = document.createElement("h4");
            songArtist.textContent = `${song.artist}`;
            songMeta.appendChild(songTitle);
            songMeta.appendChild(songArtist);
            
            
            

            const downLoad = document.createElement("button");
            downLoad.textContent = "Download";

            downLoad.onclick = () => {
                // Check if there is a current song and it has an audio source
                if (song && song.audio) {
                    const link = document.createElement("a");
                    link.href = song.audio;  // The URL of the song's audio
                    link.download = `${song.title}.mp3`;  // Set the suggested file name for download
                    document.body.appendChild(link);  // Append the link to the body
                    link.click();  // Trigger the download
                    document.body.removeChild(link);  // Remove the link after the download
                } else {
                    alert("No song is currently playing.");
                }
            };
            songDiv.appendChild(downLoad);

            const playButton = document.createElement("button");
            playButton.textContent = "Play";
            playButton.onclick = () => {
                audio.load();
                
                // audio.play();
                playSong(song.audio);
            }
            
            songDiv.appendChild(playButton);

            resultsContainer.appendChild(songDiv);
        });
    } else {
        resultsContainer.innerHTML = '<p>No songs found.</p>';
    }
    
}


//...................................................................................................................................................................................
// Select all the library items (playlists)
const libraryItems = document.querySelectorAll(".library-item");
const librarySection = document.querySelector(".library-section");
const openPlaylistContainer = document.querySelector(".playlist-header");

// Example playlists data with multiple songs

//...................................................................................................................................................................................

libraryItems.forEach((libraryItem, index) => {
    libraryItem.addEventListener("click", () => {
        const selectedPlaylist = libraryPlaylists[index];

        // Show the selected playlist and hide the library
        openPlaylistContainer.style.display = "block";
        librarySection.style.display = "none";

        // Update browser history state
        history.pushState({ page: "playlist" }, null, "#playlist");

        // Display the playlist details
        displayPlaylist(selectedPlaylist);
        switchPlaylist(selectedPlaylist);
        
        
    });
});

window.addEventListener("popstate", (event) => {
    if (event.state && event.state.page === "playlist") {
        // If the user navigates back to the playlist state
        openPlaylistContainer.style.display = "block";
        librarySection.style.display = "none";
    } else {
        // Default state: show the library
        openPlaylistContainer.style.display = "none";
        librarySection.style.display = "block";
    }
});

document.addEventListener("DOMContentLoaded", () => {
    history.replaceState({ page: "library" }, null, "#library");
});


// function nextTrack() {
//     if (currentPlaylist.length > 0) {
//         currentTrackIndex = (currentTrackIndex + 1) % currentPlaylist.length;
//         playSong(currentPlaylist[currentTrackIndex].audio);
//     }
// }

// function prevTrack() {
//     if (currentPlaylist.length > 0) {
//         currentTrackIndex = (currentTrackIndex - 1 + currentPlaylist.length) % currentPlaylist.length;
//         playSong(currentPlaylist[currentTrackIndex].audio);
//     }
// }



// Function to display the selected playlist's details
function displayPlaylist(playList) {
    // switchPlaylist(playlists.songs);
    currentPlaylist = playList.songs;
    currentTrackIndex = 0;
    const playlistContainer = openPlaylistContainer;
    playlistContainer.innerHTML = '';  // Clear any previous playlist content

    // Create the playlist header (title, cover, and artist)
    const playlistHeader = document.createElement("div");
    playlistHeader.classList.add("playlist-header");

    const playlistImage = document.createElement("img");
    playlistImage.src = playList.cover;
    playlistImage.alt = playList.title;
    playlistHeader.appendChild(playlistImage);

    const playlistTitle = document.createElement("h3");
    playlistTitle.textContent = playList.title;
    playlistHeader.appendChild(playlistTitle);

    const playlistArtist = document.createElement("p");
    playlistArtist.textContent = `Artist: ${playList.artist}`;
    playlistHeader.appendChild(playlistArtist);

    
    
    // Create a list of songs for the selected playlist
    playList.songs.forEach((song, index) => {
        
        const songDiv = document.createElement("div");
        songDiv.classList.add("song-item");

        // Song title and artist
        const songTitle = document.createElement("p");
        songTitle.innerHTML = `${song.title}-<br> ${song.artist}`;
        songDiv.appendChild(songTitle);

        // Download button for each song
        const downLoad = document.createElement("button");
        downLoad.setAttribute("data-type", "downloadLib");
        downLoad.style.backgroundImage = 'url("covers/icons/download logo.png")';
        // downLoad.textContent = "Download";
        downLoad.onclick = () => {
            // Check if there is a current song and it has an audio source
            if (song && song.audio) {
                const link = document.createElement("a");
                link.href = song.audio;  // The URL of the song's audio
                link.download = `${song.title}.mp3`;  // Set the suggested file name for download
                document.body.appendChild(link);  // Append the link to the body
                link.click();  // Trigger the download
                document.body.removeChild(link);  // Remove the link after the download
            } else {
                alert("No song is currently playing.");
            }
        };
        songDiv.appendChild(downLoad);

        // Play button for each song
        let playButton1 = document.createElement("button");
        playButton1.setAttribute("data-type", "play-button");
        playButton1.textContent = "Play";
        playButton1.addEventListener("click",()=>{
            // switchPlaylist(playList,index);
            loadTrack(index);
            // currentTrackIndex = index;
            audio.load();
            playSong(song.audio);
            
        });
      
        songDiv.appendChild(playButton1);

        playlistHeader.appendChild(songDiv);
    });
    playlistContainer.appendChild(playlistHeader);
    
}






//...................................................................................................................................................................................

// Select all the library items (playlists)
const mainPlayItems = document.querySelectorAll(".playlist-item1");
const mainPlaySection = document.querySelector(".default-content");
const mainOpenPlayContainer = document.querySelector(".playlist-results");
//...................................................................................................................................................................................
// Example playlists data with multiple songs

//...................................................................................................................................................................................
const allSongs = document.querySelector(".all");
const music = document.querySelector(".music");
const recoPlay = document.querySelectorAll(".recommended-item");
const trendPlay = document.querySelectorAll(".trending-item");

allSongs.addEventListener("click",()=>{
    const selectedPlaylist = playlistsMain[0];

    // Show the selected playlist and hide the library
    mainOpenPlayContainer.style.display = "block";
    mainPlaySection.style.display = "none";
    // Update browser history state
    history.pushState({ page: "playlist" }, null, "#playlist");

    // Display the playlist details
    displayAllSongs(selectedPlaylist);
});



recoPlay.forEach(play =>{
    play.addEventListener("click",()=>{
        const selectedPlaylist = playlistsMain[0];

        // Show the selected playlist and hide the library
        mainOpenPlayContainer.style.display = "block";
        mainPlaySection.style.display = "none";
        // Update browser history state
        history.pushState({ page: "playlist" }, null, "#playlist");

        // Display the playlist details
        displayAllSongs(selectedPlaylist);
    });
})

trendPlay.forEach(play =>{
    play.addEventListener("click",()=>{
        const selectedPlaylist = playlistsMain[2];

        // Show the selected playlist and hide the library
        mainOpenPlayContainer.style.display = "block";
        mainPlaySection.style.display = "none";
        // Update browser history state
        history.pushState({ page: "playlist" }, null, "#playlist");

        // Display the playlist details
        displayAllSongs(selectedPlaylist);
    });
})
music.addEventListener("click",()=>{
    const selectedPlaylist = playlistsMain[2];

    // Show the selected playlist and hide the library
    mainOpenPlayContainer.style.display = "block";
    mainPlaySection.style.display = "none";
    // Update browser history state
    history.pushState({ page: "playlist" }, null, "#playlist");

    // Display the playlist details
    displayAllSongs(selectedPlaylist);
})
// music.addEventListener("click",()=>{
//     document.querySelector(".all").click();
// })

// Function to display the selected playlist's details
function displayAllSongs(playList) {
    currentPlaylist = playList.songs;
    currentTrackIndex = 0;
    mainOpenPlayContainer.style.display === "block"
    // mainOpenPlayContainer.innerHTML = '';
    mainOpenPlayContainer.style.height = "auto";
    mainOpenPlayContainer.style.pdadding = "auto";
    mainOpenPlayContainer.style.margin = "auto";


    const mainPlayContainer = mainOpenPlayContainer;
    mainPlayContainer.innerHTML = '';  // Clear any previous playlist content

    // Create the playlist header (title, cover, and artist)
    const mainPlayHeader = document.createElement("div");
    mainPlayHeader.classList.add("playlist-results");

    

    // Create a list of songs for the selected playlist
    playList.songs.forEach((song,index) => {
        const songDiv = document.createElement("div");
        songDiv.classList.add("song-item");

        //song cover
        const songCover = document.createElement("img");
        songCover.setAttribute("data-type", "song-cover");
        songCover.src = song.cover;
        songDiv.appendChild(songCover);

        // Song title and artist
        const songTitle = document.createElement("p");
        songTitle.innerHTML = `${song.title}-<br> ${song.artist}`;
        songDiv.appendChild(songTitle);

        // Download button for each song
        const downLoad = document.createElement("button");
        downLoad.setAttribute("data-type", "download");
        // downLoad.textContent = "Download";
        downLoad.onclick = () => {
            // Check if there is a current song and it has an audio source
            if (song && song.audio) {
                const link = document.createElement("a");
                link.href = song.audio;  // The URL of the song's audio
                link.download = `${song.title}.mp3`;  // Set the suggested file name for download
                document.body.appendChild(link);  // Append the link to the body
                link.click();  // Trigger the download
                document.body.removeChild(link);  // Remove the link after the download
            } else {
                alert("No song is currently playing.");
            }
        };
        songDiv.appendChild(downLoad);

        // Play button for each song
        const playButton = document.createElement("button");
        playButton.setAttribute("data-type", "play-button");
        playButton.textContent = "Play";
        playButton.onclick = () => {
            // currentTrackIndex = index;
            audio.load();
            playSong(song.audio);
        };
        songDiv.appendChild(playButton);

        mainPlayHeader.appendChild(songDiv);
    });
    mainPlayContainer.appendChild(mainPlayHeader);
}


//...................................................................................................................................................................................
//featured playlists

mainPlayItems.forEach((mainPlayItem, index) => {
    mainPlayItem.addEventListener("click", () => {
        const selectedPlaylist = playlistsMain[index];

        // Show the selected playlist and hide the library
        mainOpenPlayContainer.style.display = "block";
        mainPlaySection.style.display = "none";

        // Update browser history state
        history.pushState({ page: "playlist" }, null, "#playlist");

        // Display the playlist details
        displayMainPlaylist(selectedPlaylist);
    });
});

window.addEventListener("popstate", (event) => {
    if (event.state && event.state.page === "playlist") {
        // If the user navigates back to the playlist state
        mainOpenPlayContainer.style.display = "block";
        mainPlaySection.style.display = "none";
    } else {
        // Default state: show the library
        mainOpenPlayContainer.style.display = "none";
        mainPlaySection.style.display = "block";
    }
});

document.addEventListener("DOMContentLoaded", () => {
    history.replaceState({ page: "library" }, null, "#library");
});


// Function to display the selected playlist's details
function displayMainPlaylist(playList) {
    currentPlaylist = playList.songs;
    currentTrackIndex = 0;
    mainOpenPlayContainer.style.display === "block"
    // mainOpenPlayContainer.innerHTML = '';
    mainOpenPlayContainer.style.height = "auto";
    mainOpenPlayContainer.style.pdadding = "auto";
    mainOpenPlayContainer.style.margin = "auto";


    const mainPlayContainer = mainOpenPlayContainer;
    mainPlayContainer.innerHTML = '';  // Clear any previous playlist content

    // Create the playlist header (title, cover, and artist)
    const mainPlayHeader = document.createElement("div");
    mainPlayHeader.classList.add("playlist-results");

    const mainPlayImgContainer = document.createElement("div");
    mainPlayImgContainer.classList.add("playlist-img-container");
    mainPlayHeader.appendChild(mainPlayImgContainer);


    const mainPlayImage = document.createElement("img");
    mainPlayImage.src = playList.cover;
    mainPlayImage.alt = playList.title;
    mainPlayImgContainer.appendChild(mainPlayImage);

    const mainPlayTitle = document.createElement("h1");
    mainPlayTitle.textContent = playList.title;
    mainPlayImgContainer.appendChild(mainPlayTitle);

    const mainPlayArtist = document.createElement("p");
    mainPlayArtist.textContent = `Artist: ${playList.artist}`;
    mainPlayImgContainer.appendChild(mainPlayArtist);

    

    // Create a list of songs for the selected playlist
    playList.songs.forEach((song,index) => {
        const songDiv = document.createElement("div");
        songDiv.classList.add("song-item");

        //song cover
        const songCover = document.createElement("img");
        songCover.setAttribute("data-type", "song-cover");
        songCover.src = song.cover;
        songDiv.appendChild(songCover);

        // Song title and artist
        const songTitle = document.createElement("p");
        songTitle.innerHTML = `${song.title}-<br> ${song.artist}`;
        songDiv.appendChild(songTitle);

        // Download button for each song
        const downLoad = document.createElement("button");
        downLoad.setAttribute("data-type", "download");
        downLoad.style.backgroundImage = 'url("covers/icons/download logo.png")';
        downLoad.onclick = () => {
            // Check if there is a current song and it has an audio source
            if (song && song.audio) {
                const link = document.createElement("a");
                link.href = song.audio;  // The URL of the song's audio
                link.download = `${song.title}.mp3`;  // Set the suggested file name for download
                document.body.appendChild(link);  // Append the link to the body
                link.click();  // Trigger the download
                document.body.removeChild(link);  // Remove the link after the download
            } else {
                alert("No song is currently playing.");
            }
        };
        songDiv.appendChild(downLoad);

        // Play button for each song
        const playButton = document.createElement("button");
        playButton.setAttribute("data-type", "play-button");
        playButton.textContent = "Play";
        playButton.onclick = () => {
            loadTrack(index);
            currentTrackIndex = index;
            playSong(song.audio);
        };
        songDiv.appendChild(playButton);

        mainPlayHeader.appendChild(songDiv);
    });
    mainPlayContainer.appendChild(mainPlayHeader);
}

const showLibrary = document.querySelector(".show-library");




// Toggle visibility when the home button is clicked
homeButton.addEventListener("click", () => {
    const screenWidth = window.innerWidth;
    //for mobiles
    if ((screenWidth<768) && ((songResults.style.display === "block") || (mainOpenPlayContainer.style.display === "block") || (sidebar1.style.display="block") || (showLyrics.style.display="block") || (songDetails.style.display="block"))) {
        // Show song results and hide default content
        songResults.style.display = "none";  // or 'block' depending on the layout
        main.style.flex="0 0 100%";
        main.style.display="block";
        showLyrics.style.display="none";
        sidebar1.style.flex="0 0 0";
        sidebar1.style.display="none";
        songDetails.style.display="none";
        

        mainOpenPlayContainer.style.display === "none"
        mainOpenPlayContainer.innerHTML = '';
        mainOpenPlayContainer.style.height = "0px";
        mainOpenPlayContainer.style.pdadding = "0px";
        mainOpenPlayContainer.style.margin = "0px";
        
        defaultContent.style.display = "block";
    } else {
        // Show default content and hide song results
        songResults.style.display = "none";
        
        mainOpenPlayContainer.style.display === "none"
        mainOpenPlayContainer.innerHTML = '';
        mainOpenPlayContainer.style.height = "0px";
        mainOpenPlayContainer.style.pdadding = "0px";
        mainOpenPlayContainer.style.margin = "0px";
        songDetails.style.display="none";
        defaultContent.style.display = "block";
    }



    //for desktop
    if ((screenWidth>1024) && ((songResults.style.display === "block") || (mainOpenPlayContainer.style.display === "block") || (sidebar1.style.display="block") || (showLyrics.style.display="block"))) {
        // Show song results and hide default content
        songResults.style.display = "none";  // or 'block' depending on the layout

        main.style.display="block";
        showLyrics.style.display="none";
        // sidebar1.style.display="none";
        // sidebar1.style.flex="0 0 0";
        

        mainOpenPlayContainer.style.display === "none"
        mainOpenPlayContainer.innerHTML = '';
        mainOpenPlayContainer.style.height = "0px";
        mainOpenPlayContainer.style.pdadding = "0px";
        mainOpenPlayContainer.style.margin = "0px";
        // main.style.flex="0 0 100%";
        defaultContent.style.display = "block";
    } else {
        // Show default content and hide song results
        songResults.style.display = "none";
        
        mainOpenPlayContainer.style.display === "none"
        mainOpenPlayContainer.innerHTML = '';
        mainOpenPlayContainer.style.height = "0px";
        mainOpenPlayContainer.style.pdadding = "0px";
        mainOpenPlayContainer.style.margin = "0px";
        
        defaultContent.style.display = "block";
    }

});




const modeButton = document.getElementById('modeButton');
const modeImage = document.getElementById('modeImage');

modeButton.addEventListener('click', () => {
    if (isShuffle) {
        isShuffle = false;
        isRepeat = true;
        modeImage.src = "covers/buttons/repeatMode.png";
       
    } else if (isRepeat) {
        isRepeat = false;
        modeImage.src = "covers/buttons/defaultMode.png";
   
    } else {
        isShuffle = true;
        modeImage.src = "covers/buttons/suffleMode.png";
     
    }
});
// function playNextTrack() {
//     if (isRepeat) {
//         playSong(currentPlaylist[currentTrackIndex].audio);
//     } else if (isShuffle) {
//         currentTrackIndex = Math.floor(Math.random() * currentPlaylist.length);
//         playSong(currentPlaylist[currentTrackIndex].audio);
//     } else {
//         currentTrackIndex = (currentTrackIndex + 1) % currentPlaylist.length;
//         playSong(currentPlaylist[currentTrackIndex].audio);
//     }
// }

// function playPreviousTrack() {
//     if (isRepeat) {
//         playSong(currentPlaylist[currentTrackIndex].audio);
//     } else if (isShuffle) {
//         currentTrackIndex = Math.floor(Math.random() * currentPlaylist.length);
//         playSong(currentPlaylist[currentTrackIndex].audio);
//     } else {
//         currentTrackIndex = (currentTrackIndex - 1 + currentPlaylist.length) % currentPlaylist.length;
//         playSong(currentPlaylist[currentTrackIndex].audio);
//     }
// }

// function playSong(audioSrc) {
//     const audioElement = document.getElementById('audioPlayer');
//     audioElement.src = audioSrc;
//     audioElement.play();
// }


// Function to play the next track in the playlist
function nextTrack() {
    if (!currentPlaylist.length) return; // Handle empty playlist
    if (isRepeat) {
        currentTrackIndex = currentTrackIndex;
        loadTrack(currentTrackIndex); // Load the next track
        
    } else if (isShuffle) {
        currentTrackIndex = Math.floor(Math.random() * currentPlaylist.length);
        loadTrack(currentTrackIndex); // Load the next track
        
    } else {
        currentTrackIndex = (currentTrackIndex + 1) % currentPlaylist.length;
        loadTrack(currentTrackIndex); // Load the next track
        
    }

    // Increment index and loop back to the start
   
    
    if(showLyrics.style.display=="block"){
        songDetails.style.display="block";
    }
    else{
        songDetails.style.display="none";
    }
    // audio.play();  
    // playSong(currentSong.audio);
    audio.play();
    playPauseIcon.innerHTML = '<use href="#pause-icon"></use>';  // Update icon
   
    isPlaying = true;
}

// Function to play the previous track in the playlist
function prevTrack() {
    if (!currentPlaylist.length) return; // Handle empty playlist

    if (isRepeat) {
        currrentTrackIndex = currentTrackIndex;
    } else if (isShuffle) {
        currentTrackIndex = Math.floor(Math.random() * currentPlaylist.length);
    
    } else {
        currentTrackIndex = (currentTrackIndex - 1 + currentPlaylist.length) % currentPlaylist.length;
        
    }
    // Decrement index and loop back to the end
    
    loadTrack(currentTrackIndex); // Load the previous track
    if(showLyrics.style.display=="block"){
        songDetails.style.display="block";
    }
    else{
        songDetails.style.display="none";
    }
    audio.play();  // Play the previous track
    playPauseIcon.innerHTML = '<use href="#pause-icon"></use>';  // Update icon
    isPlaying = true;
}


// Function to load lyrics for a song
function loadLyrics(songName, artistName) {
    const fileUrl = `lyrics/${songName}.txt`;  // Path to the lyrics file

    // Insert song and artist details into the page
    let songDetails = document.getElementById("songDetails");
    songDetails.innerHTML = `
        <div>${songName}</div>
        <div>by ${artistName}</div>
    `;
    
    // Display the song details
    songDetails.style.display = "none";

    // Fetch the lyrics
    fetch(fileUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error("No Lyrics Available");  // Throw a custom error if the file is not found
            }
            return response.text();  // Get the lyrics text
        })
        .then((lyrics) => {
            // Insert the lyrics into the lyrics container
            const lyricsContainer = document.querySelector(".lyrics-container");
            lyricsContainer.textContent = lyrics;  // Display the lyrics

            // Ensure the lyrics container is visible
            const lyricsWrapper = document.querySelector(".lyrics-container");
            // lyricsWrapper.style.display = "none";  // Ensure lyrics are visible
        })
        .catch((error) => {
            console.error("Error loading lyrics:", error);  // Log the error to the console

            // If lyrics are not found, show the "No Lyrics Available" message
            let lyricsContainer = document.querySelector(".lyrics-container");
            lyricsContainer.textContent = error.message;  // Display the error message (No Lyrics Available)
            // lyricsContainer.style.display = "none";  // Make sure the container is visible
        });
}



// Function to load and display track information
function loadTrack(trackIndex) {
    const track = currentPlaylist[trackIndex]; // Get the track at the given index

    // Update the display elements with track details
    nowPlayingTitle.textContent = track.title;
    nowPlayingArtist.textContent = track.artist;
    nowPlayingCover.src = track.cover;

    // Set the audio source and prepare it for playback
    audio.src = track.audio;
    audio.load(); // Load the audio metadata

    // Update the sidebar with the track's cover image
    sidebar.src = track.cover;
    sidebar.style.backgroundSize = "cover";  // Make sure the image covers the sidebar
    sidebar.style.backgroundPosition = "center";  // Center the image
    sidebar.style.borderRadius = "8px";  // Maintain border-radius if needed
    sidebar.style.width = "100%"; // Ensure full width

    // Set artist image and song details in footer
    artistImg.src = track.artistPhoto;
    songName.textContent = track.title;
    artistName.textContent = track.artist;

    // Update the track duration and progress slider when metadata is loaded
    audio.onloadedmetadata = () => {
        durationElement.textContent = formatTime(audio.duration);  // Display the duration
        progressSlider.max = Math.floor(audio.duration);  // Set the maximum value of the progress slider
    };

    
    // Load lyrics if available for the track
    loadLyrics(track.lyrics, track.artist);               

    // Set the current song for the download button
    setCurrentSong(track);
    // Example: Call this function when a new song is played

    updateMediaMetadata(track);
    
} 


//user profile section

const userProfile = document.querySelector(".user-profile");
userProfile.addEventListener("click",()=>{
    window.location.href = "userProfile.html";
});
