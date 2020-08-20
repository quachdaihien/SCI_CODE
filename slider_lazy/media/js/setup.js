const images = document.querySelectorAll('img[data-src]');
const config = {
    rootMargin: '50px 0px',
    threshold: 0.01
};

let observer;

if ('IntersectionObserver' in window) {
    observer = new IntersectionObserver(onChange, config);
    images.forEach(img => observer.observe(img));
} else {
    console.log('%cIntersection Observers not supported', 'color: red');
    images.forEach(image => loadImage(image));
}

const loadImage = image => {
    image.classList.add('fade-in');
    image.src = image.dataset.src;
}

function onChange(changes, observer) {
changes.forEach(change => {
    if (change.intersectionRatio > 0) {
        // Stop watching and load the image
        loadImage(change.target);
        observer.unobserve(change.target);
    }
    
});
}
// slider
var customize1 = tns({
    container: '.temp3__slide_thumb',
    items: 1,
    navContainer: '#temp3__thumbnails',
    navAsThumbnails: true,
    autoplay: false,
    autoplayTimeout: 1000,
    gutter: 10,
    controls: false,
});

var sliders = [],
    containers = document.querySelectorAll('.temp3__slider2');

for (var i = 0, l = containers.length; i < l; i++) {
    sliders.push(tns({
    container: containers[i],
    axis: 'horizontal',
    items: 1,
    gutter: 10,
    nav: true,
    // controls: false,
    }));
}