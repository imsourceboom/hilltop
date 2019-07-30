import { school } from '../elements';

const title = Array.from(school.title);

if (title !== null) {
    title.map(v => {
        v.addEventListener('click', () => {
            title.map(c => {
                if (v === c) {
                    c.classList.add('active');
                } else {
                    c.classList.remove('active');
                }
            });
        });
    });
}
