import Cookies from 'universal-cookie';
import qs from 'qs';
import swalAlert from 'components/swal';

// import { logout } from 'services/api';

export const ACCESS_TOKEN = 'access_token';

const cookies = new Cookies();

/**
 * 过滤空字段
 * @param {*} obj
 */
export function filterNullValueObject(obj) {
  const result = {};
  if (obj && Object.keys(obj).length >= 1) {
    Object.keys(obj).forEach(key => {
      if (key && obj[key] !== undefined && obj[key] !== '' && obj[key] !== null) {
        // 如果查询的条件不为空
        if (obj[key].length === 0) {
          return;
        }
        result[key] = obj[key];
      }
    });
  }
  return result; // 返回查询条件
}

/**
 * 获取tooken
 * @param {string} module
 */
export function getAccessToken() {
  return cookies.get(ACCESS_TOKEN, {
    path: '/',
  });
}

/**
 * 捕获错误请求代码
 */
export function catchHttpError() {
  return res => {
    if (res && res.status !== 'undefined' && res.status) {
      if (res.status === 401) {
        if (getAccessToken()) {
          // removeAllCookie();
          removeAccessToken();
          swalAlert(
            '登录已失效，请重新登录'
          ).then(() => {
            // logout();
          });
        } else {
          const AUTH_URL = `${HmallConfig.apiGateway}/oauth/oauth/authorize?template=${HmallConfig.loginTemplate}&response_type=token&client_id=${HmallConfig.clientId}`;
          window.location.href = `${AUTH_URL}`; // 401 需要在登录后返回401的页面
        }
      } else {
        swalAlert(`${res.status}_${res.statusText}`);
      }
    }
  };
}


/**
 * generateUrlWithGetParam 将参数拼接到url
 * @param {*} url
 * @param {*} 查询参数
 */
export function generateUrlWithGetParam(url, params) {
  let newUrl = url;
  if (params && Object.keys(params).length >= 1) {
    const newParams = params;
    if (Object.keys(newParams).length >= 1) {
      newUrl += `${url.indexOf('?') >= 0 ? '&' : '?'}${qs.stringify(newParams)}`;
    }
  }
  return newUrl;
}

/**
 * 删除token
 * @param {string} token
 */
export function removeAccessToken() {
  cookies.remove(ACCESS_TOKEN, {
    path: '/',
  });
}