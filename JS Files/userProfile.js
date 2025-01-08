// Get the form and button elements
const songForm = document.getElementById('songForm');
const submitButton = document.getElementById('submitButton');

// Add an event listener for the submit button
submitButton.addEventListener('click', function () {
    // Create an object with the song details
    const songDetails = {
        title: document.getElementById('title').value,
        artist: document.getElementById('artist').value,
        lyrics: document.getElementById('lyrics').value,
        artistPhoto: document.getElementById('artistPhoto').files[0]?.name || "No file uploaded",
        cover: document.getElementById('cover').files[0]?.name || "No file uploaded",
        audio: document.getElementById('audio').value,
        searchString: document.getElementById('searchString').value,
    };

    // Log the details to the console
    console.log("Song Details Submitted:", songDetails);

    // Simulate a successful form submission (e.g., display a message or send to server)
    alert("Song details have been submitted successfully!");
});
