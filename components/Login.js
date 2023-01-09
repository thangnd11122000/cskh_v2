import React, { useEffect } from "react";
import { Form, Input, Button } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import {
  UserLoginDataSelector,
  userLogin,
  UserLoginResetter,
} from "../stores/UserState";
const FormItem = Form.Item;

const connectToRedux = connect(
  createStructuredSelector({
    userLoginError: UserLoginDataSelector,
  }),
  (dispatch) => ({
    loginUser: ({ username, password }) =>
      dispatch(userLogin({ username, password })),
    resetData: () => dispatch(UserLoginResetter),
  })
);

const enhance = compose(connectToRedux);

const Login = ({ loginUser, resetData }) => {
  const onFinish = (values) => {
    loginUser(values);
  };
  useEffect(() => {
    return () => {
      resetData();
    };
  }, [resetData]);

  return (
    <Form
      name="normal_login"
      className="login-form shadow"
      initialValues={{
        remember: true,
      }}
      autoComplete="new-password"
      onFinish={onFinish}
    >
      <FormItem
        name="username"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập tên đăng nhập",
          },
        ]}
      >
        <Input
          size="large"
          prefix={<UserOutlined />}
          placeholder="Tên tài khoản"
        />
      </FormItem>
      <FormItem
        autoComplete="new-password"
        name="password"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập mật khẩu",
          },
        ]}
      >
        <Input
          autoComplete="new-password"
          size="large"
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Mật khẩu"
        />
      </FormItem>
      <FormItem>
        <a className="login-form-forgot" href="/forgot-password">
          Quên mật khẩu?
        </a>
      </FormItem>

      <FormItem>
        <Button
          size="large"
          type="primary"
          htmlType="submit"
          className="login-form-button"
        >
          Đăng nhập
        </Button>
      </FormItem>
    </Form>
  );
};
export default enhance(Login);
