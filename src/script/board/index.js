import { board } from '../elements';

// console.log(board.footer.pages);
const choose = Array.from(board.choose);
const pages = Array.from(board.footer.pages);

if (board.self !== null) {
    choose.map(v => {
        v.addEventListener('click', () => {
            choose.map(c => {
                if (v === c) {
                    c.classList.add('active');
                } else {
                    c.classList.remove('active');
                }
            });
        });
    });

    pages.map(v => {
        v.addEventListener('click', () => {
            pages.map(c => {
                if (v === c) {
                    c.classList.add('active');
                } else {
                    c.classList.remove('active');
                }
            });
        });
    });
}
