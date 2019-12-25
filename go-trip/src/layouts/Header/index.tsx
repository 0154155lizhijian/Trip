import React, { useEffect, useState } from 'react';
import styles from './index.less';
import { Divider } from 'antd';
import NavLink from 'umi/navlink';

const Header: React.FC = () => {
  const [activeBanner, setActiveBanner] = useState('home');

  const headerList = new Array(
    { name: '首页', path: '/', key: 'home' },
    { name: '目的地', path: '/destination/', key: 'destination' },
    { name: '旅游攻略', path: '/strategy/', key: 'strategy' },
    { name: '去旅行', path: '/goTrip/', key: 'goTrip' },
    { name: '机票', path: '/plane/', key: 'plane' },
    { name: '订酒店', path: '/hotel/', key: 'hotel' },
    { name: '社区', path: '/community/', key: 'community' },
  );

  interface headerObject {
    name: string;
    path: string;
    key: string;
  }

  const renderHeaderList = (): React.ReactNode => {
    return headerList.map((item: headerObject) => (
      <li key={item.key} className={item.key === activeBanner ? 'activeBanner' : ''}>
        <NavLink
          to={item.path}
          onClick={() => {
            setActiveBanner(item.key);
          }}
        >
          {item.name}
        </NavLink>
      </li>
    ));
  };

  return (
    <div className={styles.header}>
      <div className="logo" />
      <ul className="header-lists">{renderHeaderList()}</ul>
      <div className="login">
        <NavLink
          to="/login/"
          className="log"
          onClick={() => {
            setActiveBanner('');
          }}
        >
          登录
        </NavLink>
        <Divider type="vertical" style={{ height: '16px' }} />
        <NavLink
          to="/register/"
          className="log"
          onClick={() => {
            setActiveBanner('');
          }}
        >
          注册
        </NavLink>
      </div>
    </div>
  );
};
export default Header;
