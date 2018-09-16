import React, { Component } from 'react';
import { __DEV__ } from '@/config/env';

import styles from './styles/index.less';

const DidCatch = (WrapComponent: React.ReactElement) =>
  class extends Component {
    constructor(props: any) {
      super(props);
      this.state = { error: false };
    }

    componentDidCatch(error: any, info: any) {
      this.setState({ error, info });
    }

    handleRetry = () => {
      window.location.reload();
    };

    render() {
      if (this.state.error) {
        return (
          <React.Fragment>
            <div className={styles.error_display__container}>
              <img
                className={styles.error_icon}
                src="https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg"
                alt="error"
              />
              <button type="button" onClick={this.handleRetry}>
                重新加载
              </button>
            </div>
            {__DEV__ && (
              <div className={styles.error_container}>
                <h1>Error AGAIN: {this.state.error.toString()}</h1>
                {this.state.info && (
                  <div className={styles.error_stack__info}>
                    {this.state.info.componentStack.split('\n').map((i: string) => (
                      <p key={i}>{i}</p>
                    ))}
                  </div>
                )}
              </div>
            )}
          </React.Fragment>
        );
      }

      return <WrapComponent {...this.props} />;
    }
  };

export default DidCatch;
