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

  const onSuccess = (response) => {
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
