import React from 'react';
import { List } from 'antd';
import Link from 'next/link';
import classes from "./Menu.module.scss"

const data = [
  {
    content: 'Menu',
    link: '/home/menu'
  },
  {
    content: 'Blog',
    link: '/home/blog'
  },
  {
    content: 'Blog Neo',
    link: '/home/blog/neo'
  },
  {
    content: 'about',
    link: '/home/about'
  },
  {
    content: 'Users',
    link: '/home/users'
  },
  {
    content: 'a/b/c/d/e',
    link: '/home/blog/a/b/c/d/e'
  },
  {
    content: 'Test',
    link: '/neoForm'
  },
];

const Menu = () => {
  return (
    <div>
      <List
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <Link href={item.link} ><a className={classes.Menu}>{item.content}</a></Link>
          </List.Item>
        )}
      />
    </div>
  );
}

export default Menu;
