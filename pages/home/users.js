import React from 'react';
import { useRouter } from 'next/router';
import { Row, Col } from 'antd';
import Layout from '../../Component/Layout';

const Users = () => {
    const router = useRouter()
    return (
        <Layout>
            Users
            <div>
                <button onClick={() => { router.push('/home') }}>Back</button>
            </div>
        </Layout>
    );
}

export default Users;
