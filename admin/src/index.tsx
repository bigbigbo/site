import dva from 'dva';
import createLoading from 'dva-loading';

const models = (require as any).context('./models', true, /\.tsx$/);

function importAll(r: any, cb: any): void {
  r.keys().forEach((key: any) => cb(r(key).default));
}

// 1. Initialize
const app = dva();

// 2. Plugins
app.use(createLoading());

// 3. Model
importAll(models, app.model);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');

window._store = (app as any)._store;
window.dispatch = (app as any)._store.dispatch;
