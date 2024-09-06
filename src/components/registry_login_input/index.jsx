import React, { memo, useState } from "react";
import { Button, Form, Input } from "antd";
import { FormWrap, SubmitWrap } from './style'
const RegistryLoginInput = memo((props) => {
  const { submitType, clickSubmit } = props;
  const onFinish = (values) => {
    clickSubmit(values);
  };

  const onFinishFailed = (errorInfo) => {
  };

  return (
    <FormWrap>
      <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item label="账号" name="name" rules={[{ required: true, message: "请输入你的账号!" }]}>
          <Input />
        </Form.Item>
        <Form.Item label="密码" name="password" rules={[{ required: true, message: "请输入你的密码!" }]}>
          <Input.Password />
        </Form.Item>
        <SubmitWrap>
          <Form.Item>
            <Button type="primary" htmlType="submit">{submitType}</Button>
          </Form.Item>
        </SubmitWrap>
      </Form>
    </FormWrap>
  );
});

export default RegistryLoginInput;
