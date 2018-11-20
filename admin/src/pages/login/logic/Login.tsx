import { compose, toClass, withHandlers } from 'recompose';
import { Form } from 'antd';

export default compose(
  toClass,
  Form.create(),
  withHandlers({
    handleSubmit: ({ form }) => e => {
      e.preventDefault();
      form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    }
  })
);
