import React,{ useEffect, useState } from 'react';
import styles from './index.less';
import { Divider } from 'antd';
import NavLink from 'umi/navlink';


const Header: React.FC = props => {
  const [activeBanner, setActiveBanner] = useState('');


  const headerList = new Array(
    { name: '首页', path: '/', key: 'home' },
    { name: '目的地', path: '/', key: 'place' },
    { name: '旅游攻略', path: '/', key: 'strategy' },
    { name: '去旅行', path: '/', key: 'goTrip' },
    { name: '机票', path: '/', key: 'plane' },
    { name: '订酒店', path: '/', key: 'hotel' },
    { name: '社区', path: '/', key: 'community' },
  );

  interface headerObject {
    name: string;
    path: string;
    key: string;
  }

  return (
    <div className={styles.header}>
      <div className="logo" />
      <ul className="header-lists">
        {headerList.map((item: headerObject) => (
          <li key={item.key}>{item.name}</li>
        ))}
      </ul>
      <div className="login">
        <NavLink to="/login/" className="log">
          登录
        </NavLink>
        <Divider type="vertical" style={{ height: '16px' }} />
        <NavLink to="./register/" className="log">
          注册
        </NavLink>
      </div>
    </div>
  );
};
export default Header;
