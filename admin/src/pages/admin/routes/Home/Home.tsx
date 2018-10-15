import React from 'react';
import { ConnectedRouterProps } from 'react-router-redux';
import { hot } from 'react-hot-loader';
class Home extends React.Component<ConnectedRouterProps<any>> {
  state = {
    count: 0,
    NUMBER_OF_BLOCK: 0,
    value: '',
    sss: [1, 2, 3]
  };

  handleAdd = () => {
    const { count } = this.state;

    this.setState({
      count: count + 1
    });
  };

  handleSave = () => {
    window.dispatch({
      type: 'count/save',
      payload: {
        aaa: this.state.value
      }
    });

    this.props.history.push('/demo');
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = e;

    this.setState({
      value
    });
  };

  render() {
    const someCodeIWantToFormat = `var foo = 1\nconssdf\nasda`;
    const preBlock = { __html: `<pre>${someCodeIWantToFormat}</pre>` };
    return (
      <div>
        <h1>{this.state.count}</h1>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <button type="button" onClick={this.handleSave}>
          提交并跳转
        </button>
        <br />
        <button>报错来一个</button>
        <div dangerouslySetInnerHTML={preBlock} />
      </div>
    );
  }
}

export default hot(module)(Home);
