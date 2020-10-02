import React from 'react';
import {useRouter} from 'next/router';
import { Row, Col } from 'antd';
import Layout from '../../../Component/Layout';


const index = () => {
    const router = useRouter();
    return (
        <Layout>
            <div>
                Blog index file js
            </div>
            <div>
                <button onClick={() => { router.push('/home') }}>Back</button>
            </div>
        </Layout>
    );
}

export default index;
