import React from "react"
import { LockOutlined, UserOutlined } from "@ant-design/icons"
import { Button, Card, Checkbox, Form, Input, notification } from "antd"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"

const App: React.FC = () => {
    const navigate = useNavigate()
    const [form] = Form.useForm()
    const onFinish = (values: any) => {
        form.validateFields().then(() => {
            if (values.username !== "admin" || values.password !== "admin") {
                return
            }
            navigate("/app")
            notification.success({ message: "登陆成功" })
        })
    }

    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
        >
            <Form.Item
                name="username"
                rules={[
                    { required: true, message: "Please input your Username!" },
                ]}
            >
                <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="用户名"
                />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    { required: true, message: "Please input your Password!" },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="密码"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                {/* <a className="login-form-forgot" href="">
                    Forgot password
                </a> */}
            </Form.Item>

            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                >
                    登陆
                </Button>
            </Form.Item>
        </Form>
    )
}
const LoginStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: rgba(245, 245, 245, 1);
`
const Login: React.FC = () => {
    return (
        <LoginStyle>
            <Card style={{width:300,margin:"auto" }}>
                <App />
            </Card>
        </LoginStyle>
    )
}

export default Login
