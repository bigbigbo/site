import React from 'react';
import { hot } from 'react-hot-loader';
import Button from './Button';
import { __DEV__ } from '@/config/env';
class Home extends React.Component {
  public state = {
    count: 0,
    NUMBER_OF_BLOCK: 0,
    value: '',
    sss: [1, 2, 3]
  };

  public handleAdd = () => {
    const { count } = this.state;

    this.setState({
      count: count + 1
    });
  };

  throwError = () => {
    this.setState({ sss: null });
  };

  handleChange = ({ target: { value } }) => this.setState({ value });

  public render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <button type="button" onClick={this.throwError}>
          报错奥术大师大
        </button>
      </div>
    );
  }
}

let DefaultComponent = Home;

if (__DEV__) {
  DefaultComponent = hot(module)(DefaultComponent);
}

export default DefaultComponent;
