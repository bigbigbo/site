import React from 'react';
import { Button, Spin } from 'antd';
import Loadable from 'react-loadable';

export default function dynamic(component: any) {
  return Loadable({
    loader: component,
    loading: (props: any) => {
      if (props.error) {
        return (
          <div style={{ padding: 12, textAlign: 'center' }}>
            <p>加载失败!</p>
            <Button onClick={props.retry}>重试</Button>
          </div>
        );
      }
      if (props.pastDelay) {
        return <Spin spinning={true} tip="加载中..." />;
      }
      return null;
    }
  });
}
