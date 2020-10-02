import React from 'react';
import { useRouter } from 'next/router';
import { Row, Col, List } from 'antd';
import Link from 'next/link';
import Layout from '../../../Component/Layout';

const data = [
    {
      content: 'Binh',
      link: '/home/blog/binh'
    },
    {
      content: 'Teo',
      link: '/home/blog/teo'
    },
    {
      content: 'Na',
      link: '/home/blog/na/1'
    }
  ];

const name = () => {
    const router = useRouter();
    const { name } = router.query
    console.log(router);
    console.log(data);
    return (
        <Layout>
                Trang {name}.js
                 <List
                    dataSource={data}
                    renderItem={item=>(
                        <List.Item>
                            <Link href={item.link}><a>{item.content}</a></Link>
                        </List.Item>
                    )}
                 /> 
            
        </Layout>
            
    );
}

export default name;
