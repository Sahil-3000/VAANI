let podcasts = [
    {
        id: 1,
        title: "The Haryanvi podcast",
        artist: "Nishant Dahiya",
        description: "The Haryanvi Podcast is your one stop destination for all things Haryanvi. We talk about Haryanvi Music, Culture, Society and much more here in Haryanvi Language.",
        cover: "covers/podcasts/THP/THP.png",
        songs: [
            {
                title: "10 Dialects of Haryanva",
                artist: "Nishant Dahiya",
                lyrics: "10 Dialects of Haryanva",
                artistPhoto: "covers/podcasts/THP/Nishant Dahiya.png",
                cover: "covers/podcasts/THP/10 Dialects Of Haryana.jpg",
                audio: "https://www.dropbox.com/scl/fi/mp6l1u151j0ixiszeb05b/10_Dialects_of_Haryana___Haryanvi_Talk-128k-1.m4a?rlkey=5bomkosmqkkuv00agelrk3ai9&st=su7zvair&dl=1",
                searchString: "10 Dialects of Haryanva The Haryanvi Podcast THP"
            }
        ]
    },
    {
        id: 2,
        title: "The Joe Rogan Experience",
        artist: "Joe Rogan",
        description: "The Joe Rogan Experience podcast is a long form conversation hosted by comedian Joe Rogan with friends and guests that have included comedians, actors, musicians, MMA fighters, authors, artists, and beyond.",
        cover: "covers/podcasts/TJRE/TJRE.png",
        songs: [
            {
                title: "Joe Rogan Experience #1554 - Kanye West",
                artist: "Joe Rogan",
                lyrics: "Joe Rogan Experience #1554 - Kanye West",
                artistPhoto: "https://upload.wikimedia.org/wikipedia/en/4/4c/The_Joe_Rogan_Experience_logo.jpg",
                cover: "https://upload.wikimedia.org/wikipedia/en/4/4c/The_Joe_Rogan_Experience_logo.jpg",
                audio: "https://www.youtube.com/watch?v=2O6duDDkhis",
                searchString: "Joe Rogan Experience #1554 - Kanye West The Joe Rogan Experience"
            },
            {
                title: "Joe Rogan Experience #1553 - Matthew McConaughey",
                artist: "Joe Rogan",
                lyrics: "Joe Rogan Experience #1553 - Matthew McConaughey",
                artistPhoto: "https://upload.wikimedia.org/wikipedia/en/4/4c/The_Joe_Rogan_Experience_logo.jpg",
                cover: "https://upload.wikimedia.org/wikipedia/en/4/4c/The_Joe_Rogan_Experience_logo.jpg",
                audio: "https://www.youtube.com/watch?v=WV6dZMj1b4A",
                searchString: "Joe Rogan Experience #1553 - Matthew McConaughey The Joe Rogan Experience"
            }
        ]
    },

    {
        id: 3,
        title: "The Haryanvi podcast",
        artist: "Nishant Dahiya",
        description: "The Haryanvi Podcast is your one stop destination for all things Haryanvi. We talk about Haryanvi Music, Culture, Society and much more here in Haryanvi Language.",
        cover: "covers/podcasts/THP/THP.png",
        songs: [
            {
                title: "10 Dialects of Haryanva",
                artist: "Nishant Dahiya",
                lyrics: "10 Dialects of Haryanva",
                artistPhoto: "covers/podcasts/THP/Nishant Dahiya.png",
                cover: "covers/podcasts/THP/10 Dialects Of Haryana.jpg",
                audio: "https://www.dropbox.com/scl/fi/mp6l1u151j0ixiszeb05b/10_Dialects_of_Haryana___Haryanvi_Talk-128k-1.m4a?rlkey=5bomkosmqkkuv00agelrk3ai9&st=su7zvair&dl=1",
                searchString: "10 Dialects of Haryanva The Haryanvi Podcast THP"
            }
        ]
    },
    {
        id: 4,
        title: "The Joe Rogan Experience",
        artist: "Joe Rogan",
        description: "The Joe Rogan Experience podcast is a long form conversation hosted by comedian Joe Rogan with friends and guests that have included comedians, actors, musicians, MMA fighters, authors, artists, and beyond.",
        cover: "covers/podcasts/TJRE/TJRE.png",
        songs: [
            {
                title: "Joe Rogan Experience #1554 - Kanye West",
                artist: "Joe Rogan",
                lyrics: "Joe Rogan Experience #1554 - Kanye West",
                artistPhoto: "https://upload.wikimedia.org/wikipedia/en/4/4c/The_Joe_Rogan_Experience_logo.jpg",
                cover: "https://upload.wikimedia.org/wikipedia/en/4/4c/The_Joe_Rogan_Experience_logo.jpg",
                audio: "https://www.youtube.com/watch?v=2O6duDDkhis",
                searchString: "Joe Rogan Experience #1554 - Kanye West The Joe Rogan Experience"
            },
            {
                title: "Joe Rogan Experience #1553 - Matthew McConaughey",
                artist: "Joe Rogan",
                lyrics: "Joe Rogan Experience #1553 - Matthew McConaughey",
                artistPhoto: "https://upload.wikimedia.org/wikipedia/en/4/4c/The_Joe_Rogan_Experience_logo.jpg",
                cover: "https://upload.wikimedia.org/wikipedia/en/4/4c/The_Joe_Rogan_Experience_logo.jpg",
                audio: "https://www.youtube.com/watch?v=WV6dZMj1b4A",
                searchString: "Joe Rogan Experience #1553 - Matthew McConaughey The Joe Rogan Experience"
            }
        ]
    },


    {
        id: 5,
        title: "The Haryanvi podcast",
        artist: "Nishant Dahiya",
        description: "The Haryanvi Podcast is your one stop destination for all things Haryanvi. We talk about Haryanvi Music, Culture, Society and much more here in Haryanvi Language.",
        cover: "covers/podcasts/THP/THP.png",
        songs: [
            {
                title: "10 Dialects of Haryanva",
                artist: "Nishant Dahiya",
                lyrics: "10 Dialects of Haryanva",
                artistPhoto: "covers/podcasts/THP/Nishant Dahiya.png",
                cover: "covers/podcasts/THP/10 Dialects Of Haryana.jpg",
                audio: "https://www.dropbox.com/scl/fi/mp6l1u151j0ixiszeb05b/10_Dialects_of_Haryana___Haryanvi_Talk-128k-1.m4a?rlkey=5bomkosmqkkuv00agelrk3ai9&st=su7zvair&dl=1",
                searchString: "10 Dialects of Haryanva The Haryanvi Podcast THP"
            }
        ]
    }
];

// Function to display podcasts
function displayPodcasts(podcasts) {
    const podcastContainer = document.querySelector(".podcast-container");
    podcastContainer.innerHTML = ''; // Clear previous content
    podcastContainer.style.display = "flex";
    const screenWidth = window.innerWidth;
    if(screenWidth<1024){
        podcastContainer.style.flexDirection = "row";
    }
    else{
        podcastContainer.style.flexDirection = "column";
    }

    podcasts.forEach(podcast => {
        const podcastDiv = document.createElement("div");
        podcastDiv.classList.add("podcast-item");

        const podcastImage = document.createElement("img");
        podcastImage.src = podcast.cover;
        podcastImage.alt = podcast.title;
        podcastDiv.appendChild(podcastImage);

        const podcastTitle = document.createElement("h3");
        podcastTitle.textContent = podcast.title;
        podcastDiv.appendChild(podcastTitle);

        const podcastArtist = document.createElement("p");
        podcastArtist.textContent = `Host: ${podcast.artist}`;
        podcastDiv.appendChild(podcastArtist);

        const podcastDescription = document.createElement("p");
        podcastDescription.textContent = podcast.description;
        podcastDiv.appendChild(podcastDescription);

        podcastDiv.addEventListener("click", () => {
            displayPodcastEpisodes(podcast);
        });

        podcastContainer.appendChild(podcastDiv);
    });
}

// Function to display podcast episodes
function displayPodcastEpisodes(podcast) {
    const episodeContainer = document.querySelector(".episode-container");
    episodeContainer.innerHTML = ''; // Clear previous content

    const podcastHeader = document.createElement("div");
    podcastHeader.classList.add("podcast-header");

    const podcastImage = document.createElement("img");
    podcastImage.src = podcast.cover;
    podcastImage.alt = podcast.title;
    podcastHeader.appendChild(podcastImage);

    const podcastTitle = document.createElement("h3");
    podcastTitle.textContent = podcast.title;
    podcastHeader.appendChild(podcastTitle);

    const podcastArtist = document.createElement("p");
    podcastArtist.textContent = `Host: ${podcast.artist}`;
    podcastHeader.appendChild(podcastArtist);

    const podcastDescription = document.createElement("p");
    podcastDescription.textContent = podcast.description;
    podcastHeader.appendChild(podcastDescription);

    episodeContainer.appendChild(podcastHeader);

    podcast.songs.forEach((episode, index) => {
        const episodeDiv = document.createElement("div");
        episodeDiv.classList.add("episode-item");

        const episodeImage = document.createElement("img");
        episodeImage.src = episode.cover;
        episodeImage.alt = episode.title;
        episodeDiv.appendChild(episodeImage);

        const episodeTitle = document.createElement("h4");
        episodeTitle.textContent = episode.title;
        episodeDiv.appendChild(episodeTitle);

        const episodeArtist = document.createElement("p");
        episodeArtist.textContent = `Artist: ${episode.artist}`;
        episodeDiv.appendChild(episodeArtist);

        const episodeDescription = document.createElement("p");
        episodeDescription.textContent = episode.lyrics;
        episodeDiv.appendChild(episodeDescription);

        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("button-container");

        const playButton = document.createElement("button");
        playButton.textContent = "Play";
        playButton.addEventListener("click", () => {
            currentPlaylist = podcast.songs;
            loadTrack(index);
            playSong(episode.audio);
        });
        buttonContainer.appendChild(playButton);

        const downloadButton = document.createElement("button");
        downloadButton.textContent = "Download";
        downloadButton.classList.add("download-button");
        downloadButton.addEventListener("click", () => {
            const link = document.createElement("a");
            link.href = episode.audio;
            link.download = `${episode.title}.mp3`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
        buttonContainer.appendChild(downloadButton);

        episodeDiv.appendChild(buttonContainer);
        episodeContainer.appendChild(episodeDiv);
    });

    // Show the episode container and hide the podcast container
    document.querySelector(".podcast-container").style.display = "none";
    episodeContainer.style.display = "block";

    // Update browser history state
    history.pushState({ page: "episodes", podcastIndex: podcasts.indexOf(podcast) }, null, `#episodes-${podcasts.indexOf(podcast)}`);
}

// Event listener for showing podcasts
const podcastButton = document.querySelector(".podcast");
podcastButton.addEventListener("click", () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 1024) {
        openPlaylistContainer.style.display = "none";
    } else {
        openPlaylistContainerMain.style.display = "none";
    }
    mainOpenPlayContainer.style.display = "none";
    defaultContent.style.display = "none";
    document.querySelector(".podcast-container").style.display = "block";
    document.querySelector(".episode-container").style.display = "none";
    history.pushState({ page: "podcasts" }, null, "#podcasts");
    displayPodcasts(podcasts);
});

// Handle browser back/forward navigation for podcasts
window.addEventListener("popstate", (event) => {
    if (event.state && event.state.page === "podcasts") {
        document.querySelector(".podcast-container").style.display = "block";
        document.querySelector(".episode-container").style.display = "none";
        displayPodcasts(podcasts);
    } else if (event.state && event.state.page === "episodes") {
        document.querySelector(".podcast-container").style.display = "none";
        document.querySelector(".episode-container").style.display = "block";
        displayPodcastEpisodes(podcasts[event.state.podcastIndex]);
    } else {
        document.querySelector(".podcast-container").style.display = "none";
        document.querySelector(".episode-container").style.display = "none";
    }
});