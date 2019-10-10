import flatpickr from 'flatpickr';
import { Korean } from 'flatpickr/dist/l10n/ko.js';
import { adminMember, adminSchedule } from '../elements';

if (adminMember.self || adminSchedule.self) {
    const flatCss = document.createElement('link');
    flatCss.rel = 'stylesheet';
    flatCss.href = 'https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css';
    document.head.appendChild(flatCss);
}

flatpickr('#mem_birth', {
    locale: Korean,
    disableMobile: true
});

flatpickr('#choose-date', {
    locale: Korean,
    disableMobile: true
});
