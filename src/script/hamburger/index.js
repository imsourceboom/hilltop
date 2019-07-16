import { header } from '../elements';

const hamburger = header.mobile.hamburger;
const navMobile = header.mobile.nav;
const ulDesk = header.desk.ul;
const subDesk = header.desk.sub;

/*
Desktop
*/
const activeSubMenu = () => {
    subDesk.style.transform = 'translateY(100%)';
};
const closeSubMenu = () => {
    subDesk.style.transform = 'translateY(0)';
};

ulDesk.addEventListener('mouseover', () => {
    activeSubMenu();
});
ulDesk.addEventListener('mouseout', () => {
    closeSubMenu();
});
subDesk.addEventListener('mouseover', () => {
    activeSubMenu();
});
subDesk.addEventListener('mouseout', () => {
    closeSubMenu();
});

/*
Mobile
*/
const trigger = e => {
    hamburger.classList.toggle('is-active');
    navMobile.classList.toggle('active');
};

hamburger.addEventListener('click', trigger);

// li.map(i => {
//     i.addEventListener('click', trigger);
// });
