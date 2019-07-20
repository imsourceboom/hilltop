import { news } from '../elements';

Array.from(news.title).map(v => {
    v.addEventListener('click', e => {
        Array.from(news.title).map(title => {
            if (v === title) {
                if (!title.classList.contains('active')) {
                    title.classList.add('active');
                } else {
                    title.classList.remove('active');
                }
            } else {
                title.classList.remove('active');
            }
        });
        Array.from(news.list).map(list => {
            if (v.nextElementSibling === list) {
                if (!list.classList.contains('active')) {
                    list.classList.add('active');
                } else {
                    list.classList.remove('active');
                }
            } else {
                list.classList.remove('active');
            }
        });
    });
});
