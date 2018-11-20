import React from 'react';

// components
import { Layout } from 'antd';
import Menu from './components/menu';

import styles from './styles/PageWithMenu.less';

const { Header, Sider, Content } = Layout;

const PageWithMenu: React.SFC<any> = props => {
  const { children, collapsed = false } = props;
  return (
    <Layout>
      <Sider trigger={null} collapsible={true} collapsed={collapsed}>
        <div className={styles.logo} />
        <Menu />
      </Sider>
    </Layout>
  );
};

export default PageWithMenu;
