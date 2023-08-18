import { Button, Checkbox, Form, Input } from 'antd';
import React, {useCallback} from 'react';
import {useNavigate} from 'react-router-dom';
import './login.css';

const Login = (props) => {
    const navigate = useNavigate();
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

      const handleSubmit = useCallback(() => navigate('/chapters', {replace: true}), [navigate]);
      const mob = window.innerWidth <= 480;

    return (
        <div className='logbody'>
          <div className='leftlog'>
           <div className='leftname'>Physics Engine</div>
          </div>
          <div className='rightlog'>
          <div id="sign-form">
          <div>{mob ? <div id="sub-title" >
                    Physics Engine
                </div> : <div id="sub-title" >
                    LOG IN
                </div>}</div>
          
          <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
           className='loginput'
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>
    
          <Form.Item
             className='loginput'
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
    
          <Form.Item
           className='loginput'
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
    
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit" onClick= {handleSubmit} className="SubmitButton">
              Submit
            </Button>
          </Form.Item>
        </Form>
        </div>
          </div>
        </div>
        
      );
}

export default Login