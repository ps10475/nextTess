import React from 'react';
import {Row,Col} from 'antd';
import Menu from './Menu';

const Layout = ({children}) => {
    return (
        <Row>
            <Col xs={6}>
                <Menu />
            </Col>
            <Col xs={18}>
                {children}
            </Col>
        </Row>
    );
}

export default Layout;
