import { RouteProps, RouteComponentProps } from 'react-router';

/**
 *
 * 路由配置表选项
 * @export
 * @interface RouteConfig
 */
export interface RouteConfig extends RouteProps {
  path: string;
  name: string;
  component: any;
  models?: string[];
  exact?: boolean;
}

/**
 * 定义路由param，约束我们在定义路由的path时候只使用type或者id字段
 *
 * @export
 * @interface matchParams
 */
export interface MatchParams {
  type?: undefined | string;
  id?: undefined | string;
}

/**
 *
 * 我们在路由页面中额外注入的其他属性
 * @export
 * @interface RoutePageProps
 * @extends {RouteProps}
 */
export interface RoutePageProps extends RouteComponentProps<MatchParams> {
  name: string;
}
