const doc = document;

export const header = {
    self: doc.querySelector('body > header'),
    mobile: {
        nav: doc.querySelector('body > header > .mobile nav'),
        ul: doc.querySelector('body > header > .mobile nav ul'),
        li: doc.querySelectorAll('body > header > .mobile nav ul li'),
        hamburger: doc.querySelector('body > header .hamburger')
    },
    desk: {
        nav: doc.querySelector('body > header > .desk nav'),
        ul: doc.querySelector('body > header > .desk nav .main ul'),
        li: doc.querySelectorAll('body > header > .desk nav .main ul li'),
        sub: doc.querySelector('body > header > .desk nav .sub ')
    }
};

export const main = {
    self: doc.querySelector('body > main'),
    section: doc.querySelectorAll('body > main > section')
};

console.log('Webpack On!!');
