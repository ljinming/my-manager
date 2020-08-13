import React, {Component} from 'react';
import {Form,Input,Button,Checkbox} from 'antd';
class Login extends Component {


    handleFinish = (key,value) =>{
        console.log('999sf',key,value)
    };

    render() {
        const layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
        };
        const tailLayout = {
            wrapperCol: { offset: 8, span: 16 },
        };
        return (
            <div>
                <Form
                    {...layout}
                    name='basic information'
                    labelAlign='left'
                    initialValues={{ remember: true }}
                    onFinish={(value)=>this.handleFinish('ok',value)}
                    onFinishFailed={(value)=>this.handleFinish('err',value)}
                >
                    <Form.Item
                        label='username'
                        name='username'
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label='password'
                        name='password'
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>

        );
    }
}

export default Login;