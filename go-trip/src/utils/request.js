/**
 * request.js 通用请求
 * @date 2019/11/18
 * @author lizhijian
 * @copyright Copyright (c) 2019, lizhijian
 */
import {
  catchHttpError,
  // getAccessToken,
  filterNullValueObject,
  generateUrlWithGetParam,
} from '@/utils/utils';
import swalAlert from '@/component/swal';

export default function request(url, options = {}) {
  let newUrl = url;
  // 头查询参数
  if (options.query) {
    let filterNullQuery = options.query;
    if (options.method === 'GET') {
      filterNullQuery = filterNullValueObject(options.query);
    }
    newUrl = generateUrlWithGetParam(url, filterNullQuery);
  }
  return new Promise((resolve, reject) => {
    fetch(newUrl, {
      method: 'GET',
      ...options,
      headers: getHeader(options.headers),
    })
      .then(response => {
        return new Promise((resolveStatus, rejectStatus) => {
          if (response.status === 204) {
            // 204 no content则直接返回{}
            resolveStatus({});
            return false;
          }
          if (response.ok) {
            const { dataType = 'json' } = options;
            resolveStatus(response[dataType]());
          } else {
            rejectStatus(response);
          }
        });
      })
      .then(res => {
        if (res.failed !== true) {
          resolve(res);
        } else {
          reject();
          swalAlert(res.message);
        }
      })
      .catch(catchHttpError());
  });
}

/**
 * 默认headers
 */
function getHeader(headerInfo = {}) {
  const headers = {
    'Content-type': 'application/json;charset=UTF-8', // 默认格式
    ...headerInfo,
  };
  // const accessToken = getAccessToken();
  // if (accessToken) {
  //   headers.Authorization = `Bearer ${accessToken}`;
  // }
  return headers;
}
