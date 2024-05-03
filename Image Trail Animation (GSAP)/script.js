'use strict';

// this will ensure entire script will run only after html loaded

document.addEventListener('DOMContentLoaded', () => {
    /* selecting items container */
    const container = document.querySelector('.items__container');

    let imageIndex = 1; /* this helps to iterate over image files */

    let animationTiming = null; /* this will manage timing for animation */

    let currentlyPlaying = false; /* this is flag to ensure animations do not overlap */

    /* Function to create a new image container element */
    function createImgContainer(x, y) {
        const imgContainer = document.createElement('div');
        imgContainer.className = 'items__container--item';
        imgContainer.style.left = `${x - 75}px`;
        imgContainer.style.top = `${y - 100}px`;

        const imgElement = document.createElement('img');
        imgElement.src = `./images/img${imageIndex}.jpg`; // Image source based on index


        imgContainer.appendChild(imgElement);
        imageIndex = (imageIndex % 15) + 1;// iterates over 15 images

        container.appendChild(imgContainer);

        manageContainerLimit();
    }


    function manageContainerLimit() {
        // Removes the oldest child element if there are more than 15 images
        while (container.children.length > 15) {
            container.removeChild(container.firstChild);
        }
    }

    function startAnimation() {
        if (currentlyPlaying || container.children.length === 0) return;

        currentlyPlaying = true;

        gsap.to('.items__container--item', {
            y: 1000, // Animates downward movement
            scale: 0.5, // Scales down the images
            opacity: 0, // Fades out the images
            duration: 0.3, // Sets animation duration to 0.5 seconds
            stagger: 0.025, // Adds a slight stagger between each element's animation
            onComplete: function () {
                this.targets().forEach((item) => {
                    if (item.parentNode) {
                        item.parentNode.removeChild(item);

                    }
                });

                currentlyPlaying = false;
            }
        });
    }

    container.addEventListener('mousemove', function (event) {
        clearTimeout(animationTiming);

        createImgContainer(event.pageX, event.pageY);

        animationTiming = setTimeout(startAnimation, 100);
    });


});
