import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

import enhance from './logic/Login';

import styles from './styles/index.less';

const FormItem = Form.Item;

interface OwnProps {
  form: RCForm;
  handleSubmit(): void;
}

const Login: React.SFC<OwnProps> = props => {
  const { form, handleSubmit } = props;
  const { getFieldDecorator } = form;

  return (
    <Form onSubmit={handleSubmit} className={styles.loginForm}>
      <FormItem>
        {getFieldDecorator('userName', {
          rules: [{ required: true, message: 'Please input your username!' }]
        })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />)}
      </FormItem>
      <FormItem>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Please input your Password!' }]
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="密码"
          />
        )}
      </FormItem>
      <FormItem>
        {getFieldDecorator('remember', {
          valuePropName: 'checked',
          initialValue: true
        })(<Checkbox>Remember me</Checkbox>)}
        <Button type="primary" htmlType="submit" className={styles.loginFormButton}>
          Log in
        </Button>
      </FormItem>
    </Form>
  );
};

export default enhance(Login);
