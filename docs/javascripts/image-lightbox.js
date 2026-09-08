document.addEventListener("DOMContentLoaded", function () {

    const lightbox = document.createElement("div");
    lightbox.className = "image-lightbox";

    const lightboxImage = document.createElement("img");

    const closeButton = document.createElement("button");
    closeButton.className = "image-lightbox__close";
    closeButton.innerHTML = "&times;";
    closeButton.setAttribute("aria-label", "Close image");

    lightbox.appendChild(lightboxImage);
    lightbox.appendChild(closeButton);

    document.body.appendChild(lightbox);

    /* Find documentation images */
    const images = document.querySelectorAll(".md-typeset img");

    images.forEach(function (image) {

        image.addEventListener("click", function () {

            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt || "";

            lightbox.classList.add("is-active");

            document.body.style.overflow = "hidden";
        });

    });

    function closeLightbox() {
        lightbox.classList.remove("is-active");
        document.body.style.overflow = "";
    }

    closeButton.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", function (event) {

        if (event.target === lightbox) {
            closeLightbox();
        }

    });

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {
            closeLightbox();
        }

    });

});