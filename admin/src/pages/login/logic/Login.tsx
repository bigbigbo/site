import { compose, toClass, withHandlers } from 'recompose';
import { Form } from 'antd';

export default compose(
  toClass,
  Form.create(),
  withHandlers({
    handleSubmit: () => fieldsValue => {
      console.log('==>', fieldsValue);
    }
  })
);
