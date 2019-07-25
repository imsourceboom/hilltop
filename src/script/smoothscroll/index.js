import SmoothScroll from 'smooth-scroll';

new SmoothScroll('a[href*="#"]', {
    speed: 300,
    speedAsDuration: true,
    easing: 'easeInOutCubic'
});
