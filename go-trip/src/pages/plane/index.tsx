import React, { Component, useState } from 'react'

import { Form, Icon, Input, Button, Checkbox } from 'antd';
import router from 'umi/router';
import Link from 'umi/link';

const Plane :React.FC = props => {
  const [page, setpage] = useState('机票');
  const FormItem = Form.Item;
  const { getFieldDecorator, getFieldsValue } = props.form;
  return (
        <div className="login-form">
          <h1>page</h1>
        </div>
  );
};


export default Form.create()(Plane) ;
