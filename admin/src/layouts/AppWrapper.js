import React, { Component } from 'react';
import { connect } from 'dva';
import { withRouter } from 'dva/router';
import DidCatch from '@/components/common/hoc/DidCatch';

@DidCatch
@withRouter
@connect(({ global }) => ({ loading: global.loading }))
class IndexPageLayout extends Component {
  render() {
    const { loading } = this.props;

    return (
      <React.Fragment>
        {this.props.children}
        {loading && <div>加载中</div>}
      </React.Fragment>
    );
  }
}

export default IndexPageLayout;
