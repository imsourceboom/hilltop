import { contentsBox } from '../elements';

const iframe = contentsBox.description.iframe;
const img = contentsBox.description.image;

if (contentsBox.description.self !== null) {
    // iframe 태그들을 div.youtube-wrap 로 감싸기
    iframe.forEach(e => {
        const youtubeWrap = document.createElement('div');
        youtubeWrap.setAttribute('class', 'youtube-wrap');
        youtubeWrap.innerHTML = e.outerHTML;
        e.parentNode.insertBefore(youtubeWrap, e);
        e.remove();
    });
    // img 태그들을 div.image-box 로 감싸기
    img.forEach(i => {
        const imageBox = document.createElement('div');
        imageBox.setAttribute('class', 'image-box');
        imageBox.innerHTML = i.outerHTML;
        i.parentNode.insertBefore(imageBox, i);
        i.remove();
    });
}
