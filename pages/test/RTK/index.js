import React, { useEffect } from 'react';
import { Form, Button, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, getUsers } from '../../../redux/Slice/userSlice';
import usersApi from '../../../api/usersApi';

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
};
const tailLayout = {
    wrapperCol: { offset: 6, span: 18 },
};


const index = () => {
    const dispatch = useDispatch();

    const dataFromStore = useSelector(state => state.users);

    console.log(dataFromStore);

    const usersAdded = JSON.stringify(dataFromStore)

    const onFinish = values => {
        console.log('Success:', values);
        dispatch(addUser(values))
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    useEffect(()=>{
        async function fetchData(){
            const params = {postId:1};
            const a = await usersApi.get(params);
            dispatch(getUsers(a))
        }
        fetchData();
    },[])

    return (
        <div>
            <h1>Register</h1>
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                requiredMark={true}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            <div>
                {usersAdded}
            </div>
        </div>
    );
}

export default index;
