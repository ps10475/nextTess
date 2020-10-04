import React from 'react';
import {Row,Col} from 'antd';
import Menu from './Menu';
import PropTypes from 'prop-types';

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

Layout.propTypes ={
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.array,
        PropTypes.func,
        PropTypes.element,
      ]),
}

export default Layout;
