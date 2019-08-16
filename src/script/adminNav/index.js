import { adminNav } from '../elements';

if (adminNav.self !== null) {
    const nav = adminNav.self;
    const button = adminNav.accordion.menuButton;
    const list = adminNav.menuList;

    button.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    list.map(v => {
        v.addEventListener('click', () => {
            list.map(c => {
                if (v === c) {
                    c.classList.add('active');
                } else {
                    c.classList.remove('active');
                }
            });
        });
    });
}
