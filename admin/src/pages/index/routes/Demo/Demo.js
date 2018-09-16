import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { __DEV__ } from '@/config/env';

import a from '../../../../test/a';

const test2 = a;
console.log('test==>', test2);
class Home extends Component {
  state = {
    count: 0,
    NUMBER_OF_BLOCK: 0
  };

  handleAdd = () => {
    const { count } = this.state;

    this.setState({
      count: count + 1
    });
  };

  render() {
    const { NUMBER_OF_BLOCK } = this.state;
    const arr = new Array(NUMBER_OF_BLOCK).fill(NUMBER_OF_BLOCK);
    return (
      <div>
        <h1>{this.state.count}</h1>
        <input type="text" value={this.state.value} onChange={({ target: { value } }) => this.setState({ value })} />
        <button type="button" onClick={() => this.setState({ NUMBER_OF_BLOCK: 100 })}>
          按钮
        </button>
        <ul>
          {arr.map((_, i) => (
            <li>{i}</li>
          ))}
        </ul>
      </div>
    );
  }
}

let _Component; // eslint-disable-line

if (__DEV__) {
  _Component = hot(module)(Home);
} else {
  _Component = Home;
}

export default _Component;
