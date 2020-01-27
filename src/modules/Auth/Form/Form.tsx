import React from 'react';
import AntForm, { WrappedFormUtils } from 'antd/lib/form/Form';
import { Icon } from 'antd';
import { FormWrapper, FormInput, FormItem, ButtonSubmit, ButtonWrapper } from './StyledForm';

interface FormProps {
  form: WrappedFormUtils;
}

const Form = ({ form }: FormProps) => {
  const { getFieldDecorator, validateFields } = form;
  const handleSubmit = event => {
    event.preventDefault();

    validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        console.log('err: ', err);
      }
    });
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <FormItem>
        {getFieldDecorator('mail', {
          rules: [{ required: true, message: 'Please input your mail!' }],
        })(<FormInput prefix={<Icon type="mail" />} placeholder="mail" />)}
      </FormItem>
      <FormItem>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Please input your Password!' }],
        })(<FormInput prefix={<Icon type="lock" />} type="password" placeholder="password" />)}
      </FormItem>
      <FormItem>
        <ButtonWrapper>
          <ButtonSubmit htmlType="submit">login</ButtonSubmit>
        </ButtonWrapper>
      </FormItem>
    </FormWrapper>
  );
};

export default AntForm.create()(Form);
