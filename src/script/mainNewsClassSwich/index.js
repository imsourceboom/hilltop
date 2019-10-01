import { news } from '../elements';

if (news.self !== null) {
    const elementaryCourses = news.elementary;
    elementaryCourses.map(t => {
        t.addEventListener('click', () => {
            elementaryCourses.map(m => {
                if (t === m) {
                    m.classList.add('active');
                } else {
                    m.classList.remove('active');
                }
            });
        });
    });

    const middleCourses = news.middle;
    middleCourses.map(t => {
        t.addEventListener('click', () => {
            middleCourses.map(m => {
                if (t === m) {
                    m.classList.add('active');
                } else {
                    m.classList.remove('active');
                }
            });
        });
    });

    const highCourses = news.high;
    highCourses.map(t => {
        t.addEventListener('click', () => {
            highCourses.map(m => {
                if (t === m) {
                    m.classList.add('active');
                } else {
                    m.classList.remove('active');
                }
            });
        });
    });
}
