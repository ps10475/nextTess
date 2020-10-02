import React from 'react';
import { useRouter } from 'next/router';
import { Row, Col } from 'antd';
import Layout from '../../Component/Layout';

const About = () => {
    const router = useRouter()
    return (
        <Layout>
            About
            <div>
                <button onClick={() => { router.push('/home') }}>Back</button>
            </div>
        </Layout>
    );
}

export default About;
