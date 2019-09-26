// images preload code
const images = [
    [
        '/assets/images/inside/entry/1.jpg',
        '/assets/images/inside/entry/2.jpg',
        '/assets/images/inside/entry/3.jpg',
        '/assets/images/inside/entry/4.jpg',
        '/assets/images/inside/entry/5.jpg'
    ],
    ['/assets/images/inside/class1/1.jpg', '/assets/images/inside/class1/2.jpg'],
    ['/assets/images/inside/class2/1.jpg', '/assets/images/inside/class2/2.jpg'],
    [
        '/assets/images/inside/class3/1.jpg',
        '/assets/images/inside/class3/2.jpg',
        '/assets/images/inside/class3/3.jpg'
    ],
    ['/assets/images/inside/class4/1.jpg', '/assets/images/inside/class4/2.jpg']
];

export const preload = () => {
    images.map(image => {
        image.map(image => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = image;
            document.head.appendChild(link);
        });
    });
};
