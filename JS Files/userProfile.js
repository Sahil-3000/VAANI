document.addEventListener('DOMContentLoaded', function () {
    // Edit Profile Button
    const editProfileButton = document.querySelector('.edit-profile-button');
    editProfileButton.addEventListener('click', function () {
        alert("Profile Edit functionality is not implemented yet.");
    });

    // Upload New Song Button
    const uploadButton = document.querySelector('.upload-button');
    uploadButton.addEventListener('click', function () {
        alert("Upload Song functionality is not implemented yet.");
    });

    // Play the music when clicked
    const audioElement = document.querySelector('audio');
    const coverArt = document.querySelector('.cover-art');

    coverArt.addEventListener('click', function () {
        if (audioElement.paused) {
            audioElement.play();
        } else {
            audioElement.pause();
        }
    });
});
