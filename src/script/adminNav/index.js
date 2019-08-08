import { adminNav } from '../elements';

if (adminNav.self !== null) {
    const nav = adminNav.self;
    const menu = adminNav.mobile.menu;

    menu.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}
