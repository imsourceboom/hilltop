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

const qnaDetail = document.querySelector('section#notice.qna-detail');
const deleteBtn = document.querySelector('.control-buttons .right .delete');
const deletePopup = document.querySelector(
  'section#notice.qna-detail .qna-delete-popup-container',
);
const deletePopupClose = document.querySelector(
  'section#notice.qna-detail .qna-delete-popup-container .buttons button.close',
);

if (qnaDetail !== null) {
  deleteBtn.addEventListener('click', () => {
    deletePopup.classList.add('active');
  });

  deletePopupClose.addEventListener('click', () => {
    deletePopup.classList.remove('active');
  });
}
