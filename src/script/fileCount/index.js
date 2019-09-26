import { fileCount } from '../elements';

const btnOne = fileCount.fileButtonOne;
const btnTwo = fileCount.fileButtonTwo;

function fileCountFunc(e) {
    if (e.target.files.length === 1) {
        e.target.parentElement.nextElementSibling.innerText = e.target.files[0].name;
    }

    if (e.target.files.length > 1) {
        e.target.parentElement.nextElementSibling.innerText = e.target.files.length + ' files';
    }
}

if (btnOne !== null || btnTwo !== null) {
    btnOne.addEventListener('change', fileCountFunc);
    btnTwo.addEventListener('change', fileCountFunc);
}
