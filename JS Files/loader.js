document.addEventListener("DOMContentLoaded", function() {
    const loader = document.querySelector(".loader");
    loader.style.display = "block";

    const images = document.images;
    const totalImages = images.length;
    let loadedImages = 0;

    function imageLoaded() {
        loadedImages++;
        if (loadedImages === totalImages) {
            loader.style.display = "none";
        }
    }

    for (let i = 0; i < totalImages; i++) {
        if (images[i].complete) {
            imageLoaded();
        } else {
            images[i].addEventListener("load", imageLoaded);
            images[i].addEventListener("error", imageLoaded);
        }
    }

    // Fallback in case some images fail to load
    setTimeout(() => {
        loader.style.display = "none";
    }, 10000); // 10 seconds timeout
});
