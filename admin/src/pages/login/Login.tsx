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
    <div className={styles.wrapper}>
      <Form onSubmit={handleSubmit} className={styles.loginForm}>
        <h1 className="font--cn">网站管理后台</h1>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请输入用户名!' }]
          })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />)}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码!' }]
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
          })(<Checkbox>记住我</Checkbox>)}
          <Button type="primary" htmlType="submit" className={styles.loginFormButton}>
            登录
          </Button>
        </FormItem>
      </Form>
    </div>
  );
};

export default enhance(Login);
