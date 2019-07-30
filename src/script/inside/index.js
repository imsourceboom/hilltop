import { inside } from '../elements';

// console.log(inside.plan.self);
// console.log(inside.plan.one);
// console.log(inside.plan.other);

const entryway = inside.plan.one;
const rooms = inside.plan.other;

if (inside.plan.self !== null) {
    const htmlStructure = () => {
        const container = document.createElement('div');
        const close = document.createElement('div');
        close.classList.add('close');
        document.body.appendChild(container).appendChild(close);
        setTimeout(() => {
            container.classList.add('picture-container');
        }, 100);
        close.addEventListener('click', () => {
            container.remove();
        });
    };

    const pictureSwipe = e => {
        console.log(e.target);
        htmlStructure();
    };

    entryway.map(v => {
        v.addEventListener('click', pictureSwipe);
    });

    rooms.map(v => {
        v.addEventListener('click', pictureSwipe);
    });
}
