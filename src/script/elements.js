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
    title: doc.querySelectorAll('hgroup.common-title ul li')
};

export const contentsBox = {
    description: {
        self: doc.querySelector('article.description'),
        image: Array.from(doc.querySelectorAll('article.description img')),
        iframe: Array.from(doc.querySelectorAll('article.description iframe'))
    }
};

export const inside = {
    plan: {
        self: doc.querySelector('article#inside.inside .plan'),
        one: Array.from(doc.querySelectorAll('article#inside .plan ul.one li')),
        other: Array.from(doc.querySelectorAll('article#inside .plan figure'))
    }
};

export const checked = {
    allCheck: doc.querySelector('article.board.admin .list li #allcheck'),
    checks: Array.from(doc.querySelectorAll('article.board.admin .list .body li input'))
};

export const adminNav = {
    self: doc.querySelector('main#admin > nav'),
    mobile: {
        menu: doc.querySelector('main#admin > nav .mobile .menu'),
        menuBox: doc.querySelector('main#admin > nav .mobile ul')
    }
};

console.log('Webpack On!!');
