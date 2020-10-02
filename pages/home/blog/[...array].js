import React from 'react';
import { useRouter } from 'next/router';
import { Row, Col } from 'antd';
import Layout from '../../../Component/Layout';

const arrayPage = () => {
    const router = useRouter();
    const arrayQuery = router.query.array;
    let a = [];
    a = a.concat(arrayQuery)
    let renderQuery = a.map((res, index) => {
        return <div key={index}> {res} </div>;
    })
    // console.log(renderQuery);
    return (
        <Layout>
            {renderQuery ? renderQuery : null}
            {/* {arrayQuery? arrayQuery[0] : ''} */}
            <div>
                <button onClick={() => { router.push('/home') }}>Back</button>
            </div>
        </Layout>
    );
}

export default arrayPage;
