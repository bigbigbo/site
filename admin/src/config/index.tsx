import { ResourceTypeCode } from '@/config/statusCode';

// env
export const __DEV__: boolean = process.env.NODE_ENV === 'development';
export const __MOCK__: boolean = __DEV__;

// 项目中需要用到的下载根目录
export const devDownloadBaseUrl: string = 'http://192.168.1.116:8080/xshare-management-platform';
export const prodDownloadBaseUrl: string = `${window.location.protocol}//${
  window.location.host
}/xshare-management-platform`;

// publicPath with request
export const devApiPrefix: string = '/api';
export const prodApiPrefix: string = '/xshare-management-platform';
export const MOCK_API_PREFIX = '/mockApi';
export const COMMON_API_PREFIX = __DEV__ ? devApiPrefix : prodApiPrefix;

export default {
  title: '厦门市信息中心门户',
  __DEV__, // tslint:disable-line
  __MOCK__, // tslint:disable-line
  resourceTypeCode: [
    ResourceTypeCode.service,
    ResourceTypeCode.file,
    ResourceTypeCode.database,
    ResourceTypeCode.buffer
  ],
  DOWNLOAD_BASEURL: __DEV__ ? devDownloadBaseUrl : prodDownloadBaseUrl,
  API_PREFIX: __MOCK__ ? devApiPrefix : prodApiPrefix
};
