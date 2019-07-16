import SmoothScroll from 'smooth-scroll';

new SmoothScroll('a[href*="#"]', {
    speed: 100,
    speedAsDuration: true,
    easing: 'easeInOutCubic'
});
