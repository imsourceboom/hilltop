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
    self: doc.querySelector('body > main')
};

export const news = {
    self: doc.querySelector('#news'),
    title: doc.querySelectorAll('#news  .container  .contents  ul.box  .wrap > .title'),
    list: doc.querySelectorAll('#news  .container  .contents  ul.box  .wrap > ul.list')
};

export const board = {
    self: doc.querySelector('article.board'),
    choose: doc.querySelectorAll('article.board .choose p'),
    footer: {
        pages: doc.querySelectorAll('article.board .footer ul li.page')
    }
};

export const school = {
    title: doc.querySelectorAll('hgroup.school_title ul li')
};

export const contentsBox = {
    description: {
        self: doc.querySelector('article.description'),
        image: Array.from(doc.querySelectorAll('article.description img')),
        iframe: Array.from(doc.querySelectorAll('article.description iframe'))
    }
};

console.log('Webpack On!!');
