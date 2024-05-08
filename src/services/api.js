import axios from "axios";

const REQUEST_TIMEOUT = 5000;

const BACKEND_URL = `https://6.react.htmlacademy.pro/six-cities`;

const HttpCode = {
  UNAUTHORIZED: 401
};

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    "baseURL": BACKEND_URL,
    "timeout": REQUEST_TIMEOUT,
    "headers": {'withCredentials': true}
  });

  const setCookie = (name, value, options = {}) => {

    options = {
      path: `/`,
      // при необходимости добавьте другие значения по умолчанию
      ...options
    };

    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + `=` + encodeURIComponent(value);

    for (let optionKey in options) {
      updatedCookie += `; ` + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += `=` + optionValue;
      }
    }

    document.cookie = updatedCookie;
  };


  const onSuccess = (response) => {
    const headers = response.headers;
    setCookie(`authToken`, `RVdBREFATUFJTC5SVQ==`, {"secure": true, 'max-age': 2678400});
    return response;
  };

  const onFail = (err) => {
    const {response} = err;

    if (response.status === HttpCode.UNAUTHORIZED) {
      // onUnauthorized();
      // Бросаем ошибку, потому что нам важно прервать цепочку промисов после запроса авторизации.
      // Запрос авторизации — это особый случай и важно дать понять приложению, что запрос был неудачным.
      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
