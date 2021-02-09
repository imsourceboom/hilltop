const setCookie = (key, value, expiredays) => {
  let date = new Date();
  date.setDate(date.getDate() + expiredays);
  document.cookie = `${key}=${value}; path=/; expires=${date.toUTCString()};`;
};

const getCookie = (key) => {
  let result = null;
  const cookie = document.cookie.split(';');

  cookie.some(function (item) {
    item = item.replace(' ', '');
    const dic = item.split('=');

    if (key === dic[0]) {
      result = dic[1];
      return true;
    }
  });
  return result;
};

const cookieCheck = () => {
  const body = document.querySelector('body');
  const homePage = document.querySelector('main > section#home');
  const popup = document.querySelector('.popup-container.active');
  const cookieBoolean = getCookie('main_popup');

  if (homePage !== null) {
    if (cookieBoolean == null) {
      console.log('Not exist cookie');
      if (popup !== null) {
        body.style.cssText = `height: 100vh; overflow-y: hidden;`;
        const checkBox = document.querySelector(
          '.popup-container.active input[type="checkbox"',
        );
        const close = document.querySelector('.popup-container.active button.close');

        close.addEventListener('click', () => {
          if (checkBox.checked) {
            setCookie('main_popup', true, 1);
          }
          popup.parentElement.removeChild(popup);
          body.style.cssText = ``;
        });
      }
    } else {
      console.log('exist cookie');
      if (popup !== null) {
        popup.parentElement.removeChild(popup);
      }
    }
  } else {
    if (popup !== null) {
      popup.parentElement.removeChild(popup);
    }
  }
};

cookieCheck();
