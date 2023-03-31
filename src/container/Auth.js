// import { Cookies } from 'react-cookie';

// const cookies = new Cookies();

// export const setCookie = (name, value, option) => {
//   return cookies.set(name, JSON.stringify(value), {...option});
// }
// export const getCookie = (name) => {
//   return cookies.get(name);
// }
// export const removeCookie = (name, option) => {
//   return cookies.remove(name, {...option});
// }

export const setUser = (user) => {
  localStorage.setItem('@user', user);
}

export const setAccessToken = (token) => {
  localStorage.setItem('@access-Token', token);
}

