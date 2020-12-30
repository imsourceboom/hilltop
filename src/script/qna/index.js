const qna = document.querySelector('section#notice.qna');
const ul = Array.from(document.querySelectorAll('article.board .body ul'));
const popup = document.querySelector('.qna-popup-container');
const popupClose = document.querySelector('.qna-popup-container button.close');

if (qna !== null) {
  if (ul !== null) {
    ul.map((item, i) => {
      item.addEventListener('click', () => {
        popup.classList.add('active');
      });
    });
  }

  if (popupClose !== null) {
    popupClose.addEventListener('click', () => {
      popup.classList.remove('active');
    });
  }
}
