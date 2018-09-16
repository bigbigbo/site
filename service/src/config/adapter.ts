import { think } from 'thinkjs';
const fileCache = require('think-cache-file');
const fileSession = require('think-session-file');
const mysql = require('think-model-mysql');
const path = require('path');
// const { DateFile } = require('think-logger3');

const isDev = think.env === 'development';

/**
 * cache adapter config
 * @type {Object}
 */
exports.cache = {
  type: 'file',
  common: {
    timeout: 24 * 60 * 60 * 1000 // millisecond
  },
  file: {
    handle: fileCache,
    cachePath: path.join(think.ROOT_PATH, 'runtime/cache'), // absoulte path is necessarily required
    pathDepth: 1,
    gcInterval: 24 * 60 * 60 * 1000 // gc interval
  }
};

/**
 * model adapter config
 * @type {Object}
 */
// exports.model = {
//   type: 'mysql',
//   common: {
//     logConnect: isDev,
//     logSql: isDev,
//     logger: (msg: string) => think.logger.info(msg)
//   },
//   mysql: {
//     handle: mysql,
//     database: '',
//     prefix: 'think_',
//     encoding: 'utf8',
//     host: '127.0.0.1',
//     port: '',
//     user: 'root',
//     password: 'root',
//     dateStrings: true
//   }
// };

exports.model = {
  type: 'mongo', // 默认使用的类型，调用时可以指定参数切换
  common: {
    // 通用配置
    logConnect: true, // 是否打印数据库连接信息
    logger: (msg: string) => think.logger.info(msg) // 打印信息的 logger
  },
  mongo: {
    host: '127.0.0.1',
    port: 27017,
    user: '',
    password: '',
    database: 'site' // 数据库名称
  }
};

/**
 * session adapter config
 * @type {Object}
 */
exports.session = {
  type: 'file',
  common: {
    cookie: {
      name: 'thinkjs'
      // keys: ['werwer', 'werwer'],
      // signed: true
    }
  },
  file: {
    handle: fileSession,
    sessionPath: path.join(think.ROOT_PATH, 'runtime/session')
  }
};

// exports.logger = {
//   type: 'dateFile',
//   dateFile: {
//     handle: DateFile,
//     level: 'ALL',
//     absolute: true,
//     pattern: '-yyyy-MM-dd',
//     alwaysIncludePattern: false,
//     filename: path.join(think.ROOT_PATH, 'logs/xx.log')
//   }
// };
