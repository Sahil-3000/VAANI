// Default playlist is set to the playlist variable
let currentPlaylist = playlist; // Default playlist
let videoId;
const vidIFrame = document.querySelector(".vid-iframe");


let currentTrackIndex = 0;  // Default track index
let isPlaying = false;      // Flag to track if music is playing

let audio = new Audio();    // Create a new Audio object for playback
let currentSong;            // To store the current song being played

let isShuffle = false;
let isRepeat = false;


// Set initial state on page load
document.addEventListener("DOMContentLoaded", () => {
    history.replaceState({ page: "home" }, null, "#home");
    const screenWidth = window.innerWidth;
    if(screenWidth < 1024){
        defaultContent.style.paddingBottom = "50px";
        VaaniLogo.style.cursor = "none";
        VaaniName.style.cursor = "none";
    }
    homeButton.click();
    fetchJsonPlaylist(); // load dynamic JSON playlist
});


const VaaniName = document.querySelector(".VAANI");
const VaaniLogo = document.querySelector(".logo-VAANI");
VaaniLogo.addEventListener("click",()=>{
    homeButton.click();
})
VaaniName.addEventListener("click",()=>{
    homeButton.click();
})






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
    videoId = currentSong.videoID;
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
    videoId = track.videoID;
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
    if (showLyrics.style.display == "none") {
        showLyrics.style.display = "block";
        songDetails.style.display = "block";
        mainPlaySection.style.display = "none";
        defaultContent.style.display = "none";
        
        songResults.style.display = "none";
        showPlayer.style.display = "none";

        openPlaylistContainerMain.style.display = "none";
        if(screenWidth<1024){
            librarySection.style.display = "none";
            // playlistHeader.style.display = "none";
            openPlaylistContainer.style.display = "none";
            
        }
        
        
        
    }
    else {
        showLyrics.style.display = "none";  // Show the lyrics section
        songDetails.style.display = "none";
        mainPlaySection.style.display = "block"; // Hide the main play section
        defaultContent.style.display = "block";
        
        songResults.style.display = "block";
        openPlaylistContainer.style.display = "block";
        librarySection.style.display = "block";
        playlistHeader.style.display = "block";
    }

});






const displayLibrary = document.querySelector('.show-library');

// Access the elements
const sidebar1 = document.querySelector('.sidebar1');
const sidebar2 = document.querySelector('.sidebar2')
const main = document.querySelector('main');


displayLibrary.addEventListener("click", () => {

    librarySection.style.paddingBottom = "50px";
    librarySection.style.display = "block";
    // playlistHeader.style.display = "block";
    main.style.display = "none";
    showPlayer.style.display = "none";
    sidebar1.style.display = "block";
    sidebar1.style.flex = "0 0 100%";
    showLyrics.style.display = "none";


    history.pushState({ page: "library" }, null, "#library");
})


//...................................................................................................................................................................................
// Select the elements
const homeButton = document.querySelector(".home");
const songResults = document.querySelector(".song-results");
const defaultContent = document.querySelector(".default-content");
const searchBtn = document.querySelector(".search-btn");
const searchResults = document.querySelector(".search-results");

searchBtn.addEventListener("click", () => {

    if (searchResults.style.display === "none") {
        // Show song results and hide default content
        songResults.style.display = "block";  // or 'block' depending on the layout
        searchResults.style.display = "block";
        defaultContent.style.display = "none";
        openPlaylistContainerMain.style.display = "none";
        playlistContainer.style.display = "none";
        showPlayer.style.display = "none";
    } else {
        // Show default content and hide song results
        songResults.style.display = "none";
        searchResults.style.display = "none";
        defaultContent.style.display = "block";
    }
});

document.getElementById("search-btn").addEventListener("click", function () {

    const query = document.getElementById("search-bar").value.toLowerCase();
    if (query) {
        const defaultPlaylist = (playlist || []).filter(song =>
            (song.title?.toLowerCase() || "").includes(query) ||
            (song.artist?.toLowerCase() || "").includes(query) ||
            (song.searchString?.toLowerCase() || "").includes(query)
        );
        

        // Get results from `mainPlaylist`
        const mainPlaylistResults = (playlistsMain || []).flatMap(playlist =>
            (playlist.songs || []).filter(song =>
                (song.title?.toLowerCase() || "").includes(query) ||
                (song.artist?.toLowerCase() || "").includes(query) ||
                (song.searchString?.toLowerCase() || "").includes(query)
            )
        );

        // Get results from `trendPlaylist`
        const trendPlaylistResults = (trendPlaylist || []).flatMap(playlist =>
            (playlist.songs || []).filter(song =>
                (song.title?.toLowerCase() || "").includes(query) ||
                (song.artist?.toLowerCase() || "").includes(query) ||
                (song.searchString?.toLowerCase() || "").includes(query)
            )
        );

        // Get results from `recoPlaylist`
        const recoPlaylistResults = (recoPlaylist || []).flatMap(playlist =>
            (playlist.songs || []).filter(song =>
                (song.title?.toLowerCase() || "").includes(query) ||
                (song.artist?.toLowerCase() || "").includes(query) ||
                (song.searchString?.toLowerCase() || "").includes(query)
            )
        );

        // Get results from `libraryPlaylist`
        const libPlaylistResults = (libraryPlaylists || []).flatMap(playlist =>
            (playlist.songs || []).filter(song =>
                (song.title?.toLowerCase() || "").includes(query) ||
                (song.artist?.toLowerCase() || "").includes(query) ||
                (song.searchString?.toLowerCase() || "").includes(query)
            )
        );
        const podcastResults = (podcasts || []).flatMap(playlist =>
            (playlist.songs || []).filter(song =>
                (song.title?.toLowerCase() || "").includes(query) ||
                (song.artist?.toLowerCase() || "").includes(query) ||
                (song.searchString?.toLowerCase() || "").includes(query)
            )
        );
        // New: Filter results from jsonPlaylist
        const jsonPlaylistResults = (jsonPlaylist || []).filter(song =>
            (song.title?.toLowerCase() || "").includes(query) ||
            (song.artist?.toLowerCase() || "").includes(query) ||
            (song.searchString?.toLowerCase() || "").includes(query)
        );

        // Combine all results (existing arrays plus new jsonPlaylistResults)
        const results = [
            ...defaultPlaylist,
            ...mainPlaylistResults,
            ...trendPlaylistResults,
            ...recoPlaylistResults,
            ...libPlaylistResults,
            ...podcastResults,
            ...jsonPlaylistResults
        ];

        const uniqueResults = Array.from(
            new Map(
                results.map(song => [song.title + song.artist, song]) // Use title + artist as a unique key
            ).values()
        );
        displayResults(uniqueResults);
    }
});



const searchInput = document.getElementById('search-bar');
searchInput.addEventListener('input', function () {
    // const query = document.getElementById("search-bar").value.toLowerCase();
    document.getElementById("search-btn").click();

});

// Optional: Allow Enter key to trigger search
document.getElementById("search-bar").addEventListener("keypress", function (event) {

    if (event.key === "Enter") {

        document.getElementById("search-btn").click();
    }

});

// Listen for keyboard events
document.addEventListener('keydown', function (event) {

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
        results.forEach((song,index) => {
            const songDiv = document.createElement("div");
            songDiv.classList.add("song-results");

            const songImage = document.createElement("img");
            songImage.addEventListener("click",(event)=>{
                loadTrack(index);
                currentTrackIndex = index;
                playSong(song.audio);
            });

            
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

            songMeta.addEventListener("click",(event)=>{
                loadTrack(index);
                currentTrackIndex = index;
                playSong(song.audio);
            });




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
                audio.play();
                loadTrack(index);
                loadTrack(index-1);
                loadTrack(index+1);
                currentTrackIndex = index;
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
// const libraryItems = document.querySelectorAll(".library-item");
// const librarySection = document.querySelector(".library-section");
// const openPlaylistContainer = document.querySelector(".playlist-header");
// let openPlaylistContainerMain = document.querySelector(".playlist-header-main");

// // Example playlists data with multiple songs

// //...................................................................................................................................................................................

// libraryItems.forEach((libraryItem, index) => {
//     libraryItem.addEventListener("click", () => {
//        let selectedPlaylist = libraryPlaylists[index];
//         const screenWidth = window.innerWidth;
//         // Show the selected playlist and hide the library
//         if(openPlaylistContainer.style.display === "none" || openPlaylistContainerMain.style.display === "none" || defaultContent.style.display === "block"){
            
//             if(screenWidth < 1024){
//                 openPlaylistContainer.style.display = "block";
//                 librarySection.style.display = "none";
                
                
//             }
//             else{
//                 openPlaylistContainerMain.style.display = "block";
//                 // mainPlaySection.style.display = "none";
//                 // mainOpenPlayContainer.style.display = "none";
//             }
//             defaultContent.style.display = "none";
            
//         }
//         else{
//             openPlaylistContainer.style.display = "none";
//             openPlaylistContainerMain.style.display = "none";
//             defaultContent.style.display = "block";
//         }
        
//         // librarySection.style.display = "none";

//         // Update browser history state
//         history.pushState({ page: "library" }, null, "#library");
//         // switchPlaylist(selectedPlaylist);

//         // Display the playlist details
//         displayPlaylist(selectedPlaylist);



//     });
//      // Update browser history state
//     //  history.pushState({ page: "playlist" }, null, "#playlist");
// });

// window.addEventListener("popstate", (event) => {
//     if (event.state && event.state.page === "playlist") {
//         // If the user navigates back to the playlist state
//         if(screenWidth <1024){
//             openPlaylistContainer.style.display = "block";
//             librarySection.style.display = "none";
//         }else{
//             openPlaylistContainerMain.style.display = "block";
//             librarySection.style.display = "none";
//         }
//     } else {
//         // Default state: show the library
//         openPlaylistContainerMain.style.display = "none";
//         openPlaylistContainer.style.display = "none";
//         librarySection.style.display = "block";
//     }
// });

// document.addEventListener("DOMContentLoaded", () => {
//     history.replaceState({ page: "home" }, null, "#home");
// });


// Select all the library items (playlists)
const libraryItems = document.querySelectorAll(".library-item");
const librarySection = document.querySelector(".library-section");
const openPlaylistContainer = document.querySelector(".playlist-header");
let openPlaylistContainerMain = document.querySelector(".playlist-header-main");
// const defaultContent = document.querySelector(".default-content");

// Event listener for clicking library items (playlists)
libraryItems.forEach((libraryItem, index) => {
    libraryItem.addEventListener("click", () => {
        let selectedPlaylist = libraryPlaylists[index]; // Get selected playlist
        let screenWidth = window.innerWidth; // Get current screen width

        if (openPlaylistContainer.style.display === "none" || openPlaylistContainerMain.style.display === "none" || defaultContent.style.display === "block" ||mainOpenPlayContainer.style.display === "block") {
            if (screenWidth < 1024) {
                openPlaylistContainer.style.display = "block";
                
                librarySection.style.display = "none";
            } else {
                openPlaylistContainerMain.style.display = "block";
            }
            mainOpenPlayContainer.style.display = "none";
            defaultContent.style.display = "none";
        } else {
            openPlaylistContainer.style.display = "none";
            openPlaylistContainerMain.style.display = "none";
            homeButton.click();
        }

        // Update browser history to show the playlist
        history.pushState({ page: "playlist", playlistIndex: index }, null, `#playlist-${index}`);
        
        // Display the playlist details
        displayPlaylist(selectedPlaylist);
    });
});

// Handle browser back/forward navigation
window.addEventListener("popstate", (event) => {
    let screenWidth = window.innerWidth; // Get screen width again inside popstate
    
    if (event.state) {
        if (event.state.page === "playlist") {
            if (screenWidth < 1024) {
                openPlaylistContainer.style.display = "block";
                librarySection.style.display = "none";
                
            } else {
                openPlaylistContainerMain.style.display = "block";
                librarySection.style.display = "block";
                libraryItems.style.display = "block";
            }
            displayPlaylist(libraryPlaylists[event.state.playlistIndex]); // Restore correct playlist
        } else if (event.state.page === "library") {
            openPlaylistContainer.style.display = "none";
            openPlaylistContainerMain.style.display = "none";
            librarySection.style.display = "block";
        } else {
            // Default state: Show the home page
            openPlaylistContainerMain.style.display = "none";
            openPlaylistContainer.style.display = "none";
            librarySection.style.display = "block";
           homeButton.click();
        }
    } else {
        // If no state, assume home
        history.replaceState({ page: "home" }, null, "#home");
        openPlaylistContainerMain.style.display = "none";
        openPlaylistContainer.style.display = "none";
        libraryItems.style.display = "block";
        librarySection.style.display = "block";
        homeButton.click();
    }
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

    currentTrackIndex = 0;
    const screenWidth = window.innerWidth;
   let playlistContainer;
    if(screenWidth < 1024){
        playlistContainer = openPlaylistContainer;
    }else{
        playlistContainer = openPlaylistContainerMain;
    }
    
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
        playButton1.addEventListener("click", () => {
            // switchPlaylist(playList,index);
            currentPlaylist = playList.songs;
            loadTrack(index);
            // currentTrackIndex = index;
            audio.load();
            audio.play();
            playSong(song.audio);

        });

        songDiv.addEventListener("click",(event)=>{
            if(event.target = event.currentTarget){
                currentPlaylist = playList.songs;
                
                loadTrack(index);
                currentTrackIndex = index;
                // audio.src = playList.songs[currentTrackIndex].audio;
                audio.load();
                audio.play();
                playSong(song.audio);
            }
        });

        songDiv.addEventListener("click",(event)=>{
            if (event.target = event.currentTarget) {
                loadTrack(index);
                currentTrackIndex = index;
                playSong(song.audio);
            }
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
// const podcast = document.querySelector(".podcast");
const podcastContainer = document.querySelector(".podcast-container")
const episodeContainer = document.querySelector(".episode-container");
// const podcastSection = document.querySelector(".podcast-section");
// const podcastItems = document.querySelectorAll(".podcast-item")
const recoPlay = document.querySelectorAll(".recommended-item");
const trendPlay = document.querySelectorAll(".trending-item");

allSongs.addEventListener("click", () => {
    const selectedPlaylist = playlistsMain[0];

    // Show the selected playlist and hide the library
    mainOpenPlayContainer.style.display = "block";
    mainPlaySection.style.display = "none";
    // Update browser history state
    history.pushState({ page: "playlist" }, null, "#playlist");

    // Display the playlist details
    displayAllSongs(selectedPlaylist);
});




recoPlay.forEach((play, i) => {
    play.addEventListener("click", () => {
        const selectedPlaylist = recoPlaylist[i];

        // Show the selected playlist and hide the library
        mainOpenPlayContainer.style.display = "block";
        mainPlaySection.style.display = "none";
        // Update browser history state
        history.pushState({ page: "playlist" }, null, "#playlist");

        // Display the playlist details
        // displayAllSongs(selectedPlaylist);
        displayMainPlaylist(selectedPlaylist);

    });
})

trendPlay.forEach((play, i) => {
    play.addEventListener("click", () => {
        // const selectedPlaylist = playlistsMain[i];
        const selectedPlaylist = trendPlaylist[i];

        // Show the selected playlist and hide the library
        mainOpenPlayContainer.style.display = "block";
        mainPlaySection.style.display = "none";
        // Update browser history state
        history.pushState({ page: "playlist" }, null, "#playlist");
        currentPlaylist = selectedPlaylist;

        // Display the playlist details
        // displayAllSongs(selectedPlaylist);
        displayMainPlaylist(selectedPlaylist);
    });
})
music.addEventListener("click", () => {
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
    playList.songs.forEach((song, index) => {
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
            audio.play();
            loadTrack(index);
            loadTrack(index-1);
            loadTrack(index+1);
            playSong(song.audio);
        };
        songDiv.addEventListener("click",(event)=>{
            if (event.target = event.currentTarget) {
                loadTrack(index);
                currentTrackIndex = index;
                playSong(song.audio);
            }
        });

        
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

// document.addEventListener("DOMContentLoaded", () => {
//     history.replaceState({ page: "library" }, null, "#library");
// });


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
    playList.songs.forEach((song, index) => {
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
            loadTrack(index-1);
            loadTrack(index+1);
            currentTrackIndex = index;
            playSong(song.audio);
        };

        songDiv.addEventListener("click",(event)=>{
            if (event.target = event.currentTarget) {
                loadTrack(index);
                currentTrackIndex = index;
                playSong(song.audio);
            }
        });

        songDiv.appendChild(playButton);

        mainPlayHeader.appendChild(songDiv);
    });
    mainPlayContainer.appendChild(mainPlayHeader);
}

// const showLibrary = document.querySelector(".show-library");




// Toggle visibility when the home button is clicked
homeButton.addEventListener("click", () => {
    const screenWidth = window.innerWidth;
    //for mobiles
    if ((screenWidth < 1024) && ((songResults.style.display === "block") ||
        (mainOpenPlayContainer.style.display === "block") ||
        (sidebar1.style.display === "block") ||
        (showLyrics.style.display === "block") ||
        (songDetails.style.display === "block") ||
        (showPlayer.style.display === "block") ||
        (mainOpenPlayContainer.style.display === "block")||
        (podcastContainer.style.display ==="block")||
        (episodeContainer.style.display === "block"))) {

        // Show song results and hide default content
        songResults.style.display = "none";  // or 'block' depending on the layout
        main.style.flex = "0 0 100%";
        main.style.display = "block";
        showLyrics.style.display = "none";
        sidebar1.style.flex = "0 0 0";
        sidebar1.style.display = "none";
        songDetails.style.display = "none";
        showPlayer.style.display = "none";
        mainOpenPlayContainer.style.display = "none";

        mainOpenPlayContainer.innerHTML = '';
        mainOpenPlayContainer.style.height = "0px";
        mainOpenPlayContainer.style.pdadding = "0px";
        mainOpenPlayContainer.style.margin = "0px";

        podcastContainer.style.display ="none";
        episodeContainer.style.display = "none";
        defaultContent.style.display = "block";
    } else {
        // Show default content and hide song results
        songResults.style.display = "none";
        mainOpenPlayContainer.style.display ="none"
        mainOpenPlayContainer.innerHTML = '';
        mainOpenPlayContainer.style.height = "0px";
        mainOpenPlayContainer.style.pdadding = "0px";
        mainOpenPlayContainer.style.margin = "0px";
        songDetails.style.display = "none";
        podcastContainer.style.display ="none";
        episodeContainer.style.display = "none";
        defaultContent.style.display = "block";
    }



    //for desktop
    if ((screenWidth > 1024) && ((songResults.style.display === "block") || 
    (mainOpenPlayContainer.style.display === "block") || 
    (sidebar1.style.display === "block") || 
    (showLyrics.style.display === "block")||
    (showPlayer.style.display === "block") ||
    (openPlaylistContainerMain.style.display === "block")||
    (podcastContainer.style.display ==="block")||
        (episodeContainer.style.display === "block")
)) {
        // Show song results and hide default content
        songResults.style.display = "none";  // or 'block' depending on the layout

        main.style.display = "block";
        showLyrics.style.display = "none";
        showPlayer.style.display="none";
        
        // sidebar1.style.flex="0 0 0";

        openPlaylistContainerMain.style.display = "none";
        mainOpenPlayContainer.style.display === "none"
        mainOpenPlayContainer.innerHTML = '';
        mainOpenPlayContainer.style.height = "0px";
        mainOpenPlayContainer.style.pdadding = "0px";
        mainOpenPlayContainer.style.margin = "0px";
        podcastContainer.style.display ="none";
        episodeContainer.style.display = "none";
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
        openPlaylistContainerMain.style.display = "none";
        podcastContainer.style.display ="none";
        episodeContainer.style.display = "none";
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


    if (showLyrics.style.display == "block") {
        songDetails.style.display = "block";
    }
    else {
        songDetails.style.display = "none";
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
    if (showLyrics.style.display == "block") {
        songDetails.style.display = "block";
    }
    else {
        songDetails.style.display = "none";
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
    videoId = track.videoID;
    vidIFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&mute=1&modestbranding=1&playlist=${videoId}&controls=0`;
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
userProfile.addEventListener("click", () => {
    window.location.href = "../HTML Files/login.html";
});


const showPlayer = document.querySelector(".player");
const nowPlaying = document.querySelector(".now-playing");
// nowPlaying.addEventListener("click", ()=>{
//     if(showPlayer.style.display == "none"){
//         showPlayer.style.display = "block";
//     }
//     else{
//         showPlayer.style.display = "none";
//     }
// })





// Add event listener for double-click
nowPlaying.addEventListener("click", (event) => {
    
    
    if (event.target === event.currentTarget) {
        
        if (showPlayer.style.display == "none") {
            // Show the player and save the state in history
            showPlayer.style.display = "block";
            
            defaultContent.style.display = "none";
            history.pushState({ showPlayer: "block" }, "Player Visible");
        } else {
            // Hide the player and save the state in history
            showPlayer.style.display = "none";
            defaultContent.style.display = "block";
            history.pushState({ showPlayer: "none" }, "Player Hidden");
        }
    }

})

// Handle browser back/forward navigation

window.addEventListener("popstate", (event) => {
    if (event.state && event.state.showPlayer) {
        showPlayer.style.display = event.state.showPlayer;
    } else {
        // Default state if no state exists
        showPlayer.style.display = "none";
    }
});

// Function to handle login
async function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    const result = await response.json();
    if (result.success) {
        localStorage.setItem('profilePicture', result.profilePicture);
        window.location.href = result.redirect;
    } else {
        alert(result.message);
    }
}

// NEW: Global variable to hold the JSON playlist
let jsonPlaylist = [];

// NEW: Fetch the JSON playlist from the server
function fetchJsonPlaylist() {
    fetch('/api/jsonPlaylist')
        .then(response => response.json())
        .then(data => {
            jsonPlaylist = data; // assuming data is an array of song objects
            displayJsonPlaylist();
        })
        .catch(error => console.error("Error loading jsonPlaylist:", error));
}

// NEW: Render the jsonPlaylist into the designated container
function displayJsonPlaylist() {
    const container = document.getElementById("json-playlist-container");
    if (!container) return; // Ensure container exists
    container.innerHTML = ""; // Clear previous content

    jsonPlaylist.forEach((song, index) => {
        // Create a song element
        const songDiv = document.createElement("div");
        songDiv.classList.add("json-song-item");
        // Song cover
        const songCover = document.createElement("img");
        songCover.src = song.cover;
        songCover.alt = song.title;
        songDiv.appendChild(songCover);
        // Song title and artist
        const songInfo = document.createElement("div");
        songInfo.innerHTML = `<h4>${song.title}</h4><p>${song.artist}</p>`;
        songDiv.appendChild(songInfo);
        // Play button
        const playButton = document.createElement("button");
        playButton.textContent = "Play";
        playButton.addEventListener("click", (e) => {
            // Stop event propagation to avoid duplicate listeners
            e.stopPropagation();
            currentPlaylist = jsonPlaylist;
            currentTrackIndex = index;
            loadTrack(index);
            audio.load();
            audio.play();
            playSong(song.audio);
        });
        songDiv.appendChild(playButton);

        // Append to container
        container.appendChild(songDiv);
    });
}


