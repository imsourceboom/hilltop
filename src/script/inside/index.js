import { inside } from '../elements';
import { preload } from './preload';

const entryway = inside.plan.one;
const rooms = inside.plan.other;

if (inside.plan.self !== null) {
    preload();

    // Swiper script CDN add
    const scriptSrc = document.createElement('script');
    scriptSrc.src = 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/js/swiper.min.js';
    document.head.appendChild(scriptSrc);
    // Swiper CSS CDN add
    const swiperCss = document.createElement('link');
    swiperCss.setAttribute('rel', 'stylesheet');
    swiperCss.setAttribute(
        'href',
        'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css'
    );
    document.head.appendChild(swiperCss);

    const htmlStructure = (imagePath, count) => {
        // Swiper execute script code
        const script = document.createElement('script');
        script.innerHTML = `
            var galleryThumbs = new Swiper('.gallery-thumbs', {
                spaceBetween: 10,
                slidesPerView: 4,
                freeMode: true,
                watchSlidesVisibility: true,
                watchSlidesProgress: true
            });

            var galleryTop = new Swiper('.gallery-top', {
                spaceBetween: 10,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                thumbs: {
                    swiper: galleryThumbs
                }
            });
        `;

        const container = document.createElement('div');
        const close = document.createElement('div');
        const wrap = document.createElement('div');
        close.classList.add('close');
        wrap.classList.add('wrap');

        const swiperContainerTop = document.createElement('div');
        const swiperWrapperTop = document.createElement('div');
        const swiperButtonPrev = document.createElement('div');
        const swiperButtonNext = document.createElement('div');
        swiperContainerTop.classList.add('swiper-container', 'gallery-top');
        swiperWrapperTop.classList.add('swiper-wrapper');
        swiperButtonPrev.classList.add('swiper-button-prev');
        swiperButtonPrev.classList.add('swiper-button-white');
        swiperButtonNext.classList.add('swiper-button-next');
        swiperButtonNext.classList.add('swiper-button-white');
        swiperContainerTop.appendChild(swiperWrapperTop);
        swiperContainerTop.appendChild(swiperButtonPrev);
        swiperContainerTop.appendChild(swiperButtonNext);

        const swiperContainerThumbs = document.createElement('div');
        const swiperWrapperThumbs = document.createElement('div');
        swiperContainerThumbs.classList.add('swiper-container', 'gallery-thumbs');
        swiperWrapperThumbs.classList.add('swiper-wrapper');
        swiperContainerThumbs.appendChild(swiperWrapperThumbs);

        for (let i = 0; i < count; i++) {
            const swiperSlide = document.createElement('div');
            const img = document.createElement('img');
            swiperSlide.classList.add('swiper-slide');
            img.setAttribute('src', `/assets/images/inside/${imagePath}/${i + 1}.jpg`);
            swiperWrapperTop.appendChild(swiperSlide).appendChild(img);
        }

        for (let i = 0; i < count; i++) {
            const swiperSlide = document.createElement('div');
            const img = document.createElement('img');
            swiperSlide.classList.add('swiper-slide');
            img.setAttribute('src', `/assets/images/inside/${imagePath}/${i + 1}.jpg`);
            swiperWrapperThumbs.appendChild(swiperSlide).appendChild(img);
        }

        document.body.appendChild(container).appendChild(close);
        container.appendChild(wrap);
        wrap.appendChild(swiperContainerTop);
        wrap.appendChild(swiperContainerThumbs);

        setTimeout(() => {
            container.classList.add('picture-container');
        }, 100);

        document.body.appendChild(script);

        close.addEventListener('click', () => {
            container.remove();
        });
    };

    const pictureSwipe = e => {
        // console.log(e.currentTarget.nodeName);
        const ele = e.currentTarget;

        let count;
        let imagePath;

        if (ele.nodeName === 'LI') {
            count = 5;
            imagePath = 'entry';
        }
        if (ele.classList.contains('two')) {
            count = 2;
            imagePath = 'class1';
        }
        if (ele.classList.contains('three')) {
            count = 2;
            imagePath = 'class2';
        }
        if (ele.classList.contains('four')) {
            count = 3;
            imagePath = 'class3';
        }
        if (ele.classList.contains('five')) {
            count = 2;
            imagePath = 'class4';
        }

        htmlStructure(imagePath, count);
    };

    entryway.map(v => {
        v.addEventListener('click', pictureSwipe);
    });

    rooms.map(v => {
        v.addEventListener('click', pictureSwipe);
    });
}
