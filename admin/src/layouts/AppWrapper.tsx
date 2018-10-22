import React from 'react';
import { connect } from 'dva';
import { withRouter } from 'dva/router';
import { compose } from 'recompose';
import NProgress from 'nprogress';
import didCatch from '@/components/did-catch';

const enhance = compose(
  withRouter,
  connect(({ loading }) => ({ loading })),
  didCatch
);

const AppWrapper = ({ loading, children }) => {
  let currHref = '';
  const href = window.location.href; // 浏览器地址栏中地址
  if (currHref !== href) {
    NProgress.start();
    if (!loading.global) {
      NProgress.done();
      currHref = href;
    }
  }

  return <div>{children}</div>;
};

export default enhance(AppWrapper);
