// const { defaultPLaylist } = require("JS Files/defaultPlaylist.js");

// document.addEventListener("DOMContentLoaded", function() {
//     const loader = document.querySelector(".loader");
//     loader.style.display = "block";

//     // Preload audio files from defaultPlaylist
//     const audioFiles = defaultPlaylist.map(item => item.src);
//     let loadedCount = 0;

//     audioFiles.forEach(src => {
//         const audio = new Audio(src);
//         audio.addEventListener("canplaythrough", () => {
//             loadedCount++;
//             if (loadedCount === audioFiles.length) {
//                 loader.style.display = "none";
//             }
//         });
//     });

//     // Fallback in case some audio files fail to load
//     setTimeout(() => {
//         loader.style.display = "none";
//     }, 10000); // 10 seconds timeout

//     // window.addEventListener("load", function() {
//     //     loader.style.display = "none";
//     // });
// });
