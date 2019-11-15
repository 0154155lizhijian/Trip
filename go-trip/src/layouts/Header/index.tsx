import React from 'react';
import styles from './index.less';

export default function Header() {
  const headerList = new Array(
    {name:'首页',path:'/'},
    {name:'目的地',path:'/'},
    {name:'旅游攻略',path:'/'},
    {name:'去旅行',path:'/'},
    {name:'机票',path:'/'},
    {name:'订酒店',path:'/'},
    {name:'社区',path:'/'},
  )

  console.log(headerList);

  interface headerObject{
    name: string;
    path: string; 
  };

  return (
    <div className={styles.header}>
      <div className="logo">
        logo
      </div>
      <ul className="header-lists">
        {headerList.map((item: headerObject) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
