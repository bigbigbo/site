import React from 'react';
import { connect } from 'dva';
import { withRouter } from 'dva/router';
import DidCatch from '@/components/common/hoc/DidCatch';

interface IGlobal {
  loading: boolean;
}

interface IProps {
  loading: boolean;
}

@DidCatch
@withRouter
@connect(({ global }: { global: IGlobal }) => ({ loading: global.loading }))
class IndexPageLayout extends React.Component {
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
