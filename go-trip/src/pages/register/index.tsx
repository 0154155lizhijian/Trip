import React, { Component, useState } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import styles from './index.less';

const Register: React.FC = props => {
  const [page, setpage] = useState('登录');

  const { getFieldDecorator, getFieldsValue } = props.form;
  const FormItem = Form.Item;

  const handleSubmitLogin = () => {
    props.form.validateFields((err, values) => {
      if (!err) {
        const { telephone, password, remember } = getFieldsValue();
        if (remember) {
          localStorage.setItem('telephone', telephone);
          localStorage.setItem('password', password);
        }
        alert('登录成功')
      }
    });
  };

  return (
    <div className={styles.logoWrapper}>
      <div className="login-form">
        <Form>
          <FormItem>
            {getFieldDecorator('telephone', {
              rules: [
                { required: true, message: '请输入手机号!' },
                {
                  pattern: /^134[0-8]\d{7}$|^13[^4]\d{8}$|^14[5-9]\d{8}$|^15[^4]\d{8}$|^16[6]\d{8}$|^17[0-8]\d{8}$|^18[\d]{9}$|^19[8,9]\d{8}$/,
                  message: '请输入正确的手机号',
                },
              ],
              initialValue: localStorage.getItem('telephone')
            })(<Input placeholder="请输入您的手机号" />)}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [
                { required: true, message: '请输入密码!' },
                {
                  pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)(?![a-z]+$)(?![!@#$%^&*=]+$)[0-9A-Za-z!@#$%^&*=]{6,30}$/,
                  message: '密码至少包含数字/字母/字符2种组合,长度为6-30个字符',
                },
              ],
              initialValue: localStorage.getItem('password')
            })(<Input.Password placeholder="请输入密码" />)}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>记住我</Checkbox>)}
            <a className="login-form-forgot" href="">
              忘记密码
            </a>
            <Button type="primary" className="login-form-button" onClick={handleSubmitLogin}>
              注册
            </Button>
            已有账号<a href="/login/">立即登录</a>{' '}
            <span style={{ marginLeft: '40px' }}>
              或者<a href="/">返回首页</a>
            </span>
          </FormItem>
        </Form>
      </div>
    </div>
  );
};

export default Form.create({ name: 'goTrip_register' })(Register);
