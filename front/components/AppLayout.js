import React from 'react';
import { Menu, Input, Row, Col } from 'antd';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';
import UserProfile from './UserProfile'

const AppLayout = ({ children }) => {
  const { isLoggedIn } = useSelector(state => state.user);

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home"><Link href="/"><a>NodeBird</a></Link></Menu.Item>
        <Menu.Item key="profile"><Link href="/profile"><a>Profile</a></Link></Menu.Item>
        <Menu.Item key="mail">
          <Input.Search enterButton style={{ verticalAlign: 'middle' }}/>
        </Menu.Item>
      </Menu>
      <Row gutter={10} > {/* Col간의 간격*/} 
        <Col xs={24} md={6}>
          {isLoggedIn 
          ? <UserProfile />
          : 
          <LoginForm  />
        }
        
        </Col>
        <Col xs={24} md={12} >
          {children}
        </Col>
        <Col xs={24} md={6} >3st</Col>
      </Row>
    </div>
  );
};
AppLayout.propTypes = {
  children: PropTypes.node,
}

export default AppLayout;