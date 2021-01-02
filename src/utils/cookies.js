function saveAuthToCookie(value) { // token
  document.cookie = `til_auth=${value}`;
}

function saveUserToCookie(value) { // user name
  document.cookie = `til_user=${value}`;
}

function getAuthFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)til_auth\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
}

function getUserFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)til_user\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
}

function deleteCookie(value) { // 예를 들어, til_auth의 값을 지우고 싶으면 deleteCookie(til_auth)로 들어오게 인자를 받으면된다.
  document.cookie = `${value}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

export {
  saveAuthToCookie,
  saveUserToCookie,
  getAuthFromCookie,
  getUserFromCookie,
  deleteCookie,
};
