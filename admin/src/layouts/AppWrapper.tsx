import React from 'react';
import { connect } from 'dva';
import { withRouter } from 'dva/router';
import { compose } from 'recompose';
import NProgress from 'nprogress';
import didCatch from '@/components/did-catch';

import { StoreState } from '@/types/model';

const enhance = compose(
  didCatch,
  withRouter,
  connect(({ loading }: StoreState) => ({ loading }))
);

const AppWrapper: React.SFC<StoreState> = ({ loading, children }) => {
  const { href } = window.location;
  if (window._currHref !== href) {
    NProgress.start();
    if (!loading.global) {
      NProgress.done();
      window._currHref = href;
    }
  }

  return <div className="app__wrapper">{children}</div>;
};

export default enhance(AppWrapper);
