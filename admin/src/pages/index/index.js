import dva from 'dva';

const models = require.context('../../models', true, /\.js$/);

function importAll(r, cb) {
  r.keys().forEach(key => cb(r(key).default));
}

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
importAll(models, app.model);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');

window._store = app._store;
window.dispatch = app._store.dispatch;
