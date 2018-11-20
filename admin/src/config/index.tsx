// env
export const __DEV__: boolean = process.env.NODE_ENV === 'development';
export const __MOCK__: boolean = __DEV__;

// 项目中需要用到的下载根目录
export const devDownloadBaseUrl = 'http://192.168.1.116:8080/xshare-management-platform';
export const prodDownloadBaseUrl = `${window.location.protocol}//${window.location.host}/xshare-management-platform`;

// publicPath with request
export const devApiPrefix = '/api';
export const prodApiPrefix = '/api';
export const MOCK_API_PREFIX = '/mockApi';
export const COMMON_API_PREFIX = __DEV__ ? devApiPrefix : prodApiPrefix;

export default {
  title: '旺旺旺旺旺旺',
  __DEV__, // tslint:disable-line
  __MOCK__, // tslint:disable-line
  API_PREFIX: __MOCK__ ? devApiPrefix : prodApiPrefix
};
