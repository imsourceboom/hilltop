import { checked } from '../elements';

const all = checked.allCheck;
const checkList = checked.checks;

if (checked.allCheck !== null) {
    all.addEventListener('click', () => {
        checkList.map(check => {
            check.checked = all.checked;
        });
    });
}
