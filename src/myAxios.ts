

import axios from 'axios';
import config from './myServersConfig';
import { notification } from 'antd';
let tokenLose = true;

const { baseURL, successCode, invalidCode, requestTimeout, contentType } = config;

const instance = axios.create({
  baseURL,
  timeout: requestTimeout,
  headers: {
    'Content-Type': contentType,
    Authorization: sessionStorage.getItem('token') 
  }
});

// request interceptor
instance.interceptors.request.use(
  (configItem) => configItem,
  (error) =>
    // do something with request error
    Promise.reject(error)
);

// response interceptor
instance.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */
  (response) => {
    const res = response.data;
    // 请求出错处理
    // -1 超时、token过期或者没有获得授权
    if (res.code === invalidCode && tokenLose) {
      tokenLose = false;
      // 根据自己业务需求调整代码
    }

    if (successCode.indexOf(res.code) === -1) {
      notification.error({
        message: res.msg || "请求出错啦！"
      })
      return Promise.reject(res);
    }
    return res;
  },
  (error) => {
    notification.error({
      message: "请求出错啦！"
    })
    return Promise.reject(error);
  }
);

export default instance;
