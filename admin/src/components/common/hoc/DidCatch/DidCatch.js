import React, { Component } from 'react';
import { __DEV__ } from '@/config/env';

import styles from './styles/index.less';

const DidCatch = WrapComponent =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = { error: false };
    }

    componentDidCatch(error, info) {
      this.setState({ error, info });
    }

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
              <button type="button" onClick={() => window.location.reload()}>
                重新加载
              </button>
            </div>
            {__DEV__ && (
              <div className={styles.error_container}>
                <h1>Error AGAIN: {this.state.error.toString()}</h1>
                {this.state.info && (
                  <div className={styles.error_stack__info}>
                    {this.state.info.componentStack.split('\n').map(i => (
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
