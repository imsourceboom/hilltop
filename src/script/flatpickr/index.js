import flatpickr from 'flatpickr';
import { Korean } from 'flatpickr/dist/l10n/ko.js';
import { adminMember } from '../elements';

if (adminMember.self) {
    const flatCss = document.createElement('link');
    flatCss.rel = 'stylesheet';
    flatCss.href = 'https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css';
    document.head.appendChild(flatCss);
}

flatpickr('#member-birthday', {
    locale: Korean,
    disableMobile: true
});
