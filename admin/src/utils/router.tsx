import loadable from '@/utils/loadable'; // eslint-disable-line

type IDynamic = { app: any; models: any; component: any };

// 判断model是否已经被注册
export const modelNotExisted = (app: any, model: string) =>
  !app._models.some(
    ({ namespace }: { namespace: string }) => namespace === model.substring(model.lastIndexOf('/') + 1)
  );

// 按需加载组件
export const dynamic = ({ app, models = {}, component }: IDynamic) => {
  Object.entries(models).forEach(([model, modelModule]: [any, any]) => {
    if (modelNotExisted(app, model)) {
      app.model(modelModule);
    }
  });

  return loadable(component);
};
