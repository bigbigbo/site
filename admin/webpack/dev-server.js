/* eslint-disable new-cap */
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const clearConsole = require('react-dev-utils/clearConsole');
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');
const openBrowser = require('react-dev-utils/openBrowser');
const { choosePort } = require('react-dev-utils/WebpackDevServerUtils');
const chalk = require('chalk');
const ip = require('ip');
const paths = require('./paths');

const protocol = process.env.HTTPS === 'true' ? 'https' : 'http'; // 请求协议
const isClearConsole = process.env.CLEAR_CONSOLE !== 'none'; // 是否清除控制台
const isInteractive = process.stdout.isTTY; // 判断是否是标准的终端
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 5000;
const ipAddress = ip.address();
const devWebpackConfig = require('./webpack.dev.conf');

// proxy
const yicong = 'http://192.168.1.116:8080/xshare-management-platform';

const devOptions = {
  contentBase: paths.appPublic,
  publicPath: '/',
  host,
  hot: true,
  compress: true,
  quiet: true,
  clientLogLevel: 'none',
  watchOptions: {
    ignored: /node_modules/
  },
  proxy: {
    '/mockApi': {
      target: 'http://192.168.0.62:3000/mock/23',
      pathRewrite: { '^/mockApi': '' }
    },
    '/api': {
      target: yicong,
      pathRewrite: { '^/api': '' },
      changeOrigin: true
    }
  }
};

function clearConsoleWrapped() {
  if (isClearConsole) {
    clearConsole();
  }
}

webpackDevServer.addDevServerEntrypoints(devWebpackConfig, devOptions);

function setCompiler() {
  const compiler = webpack(devWebpackConfig);

  compiler.plugin('invalid', () => {
    if (isInteractive) {
      clearConsoleWrapped();
    }
    console.log('Compiling...');
  });

  compiler.plugin('done', stats => {
    if (isInteractive) {
      clearConsoleWrapped();
    }

    let isFirstCompile = true;
    const json = stats.toJson({}, true);
    const messages = formatWebpackMessages(json);
    const isSuccessful = !messages.errors.length && !messages.warnings.length;
    const showInstructions = isSuccessful && (isInteractive || isFirstCompile);

    if (isSuccessful) {
      if (stats.stats) {
        console.log(chalk.green('Compiled successfully'));
      } else {
        console.log(chalk.green(`Compiled successfully in ${(json.time / 1000).toFixed(1)}s!`));
      }
    }

    if (showInstructions) {
      console.log();
      console.log('The app is running at:');
      console.log();
      console.log(`- Local  ${chalk.cyan(`${protocol}://${host}:${port}/`)}`);
      console.log();
      console.log(`- On Your Network  ${chalk.cyan(`${protocol}://${ipAddress}:${port}/`)}`);
      console.log();
      console.log('Note that the development build is not optimized.');
      console.log(`To create a production build, use ${chalk.cyan('npm run build')}.`);
      console.log();
      console.log(chalk.green('Happy Coding！'));
      isFirstCompile = false;
    }

    // If errors exist, only show errors.
    if (messages.errors.length) {
      console.log(chalk.red('Failed to compile.'));
      console.log();
      messages.errors.forEach(message => {
        console.log(message);
        console.log();
      });

      // Show warnings if no errors were found.
    } else if (messages.warnings.length) {
      console.log(chalk.yellow('Compiled with warnings.'));
      console.log();
      messages.warnings.forEach(message => {
        console.log(message);
        console.log();
      });
      // Teach some ESLint tricks.
      console.log('You may use special comments to disable some warnings.');
      console.log(`Use ${chalk.yellow('// eslint-disable-next-line')} to ignore the next line.`);
      console.log(`Use ${chalk.yellow('/* eslint-disable */')} to ignore all warnings in a file.`);
      console.log();
    }
  });

  return compiler;
}

function runDevServer() {
  const compiler = setCompiler();
  const server = new webpackDevServer(compiler, devOptions);

  // eslint-disable-next-line
  server.listen(port, '0.0.0.0', err => {
    if (err) {
      return console.log(err);
    }

    if (isInteractive) {
      clearConsoleWrapped();
    }
    console.log(chalk.cyan('Starting the development server...'));
    console.log();

    openBrowser(`${protocol}://${host}:${port}/`);
  });
}

choosePort(host, port).then(p => {
  if (p === null) return;

  try {
    runDevServer();
  } catch (e) {
    console.log('e', e);
  }
});
