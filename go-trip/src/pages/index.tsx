import React, { Fragment, useState } from 'react';
import styles from './index.less';
import { Button, Input } from 'antd';

const { Search } = Input;

const imgLists = [
  {
    path:
      'https://n1-q.mafengwo.net/s15/M00/66/B4/CoUBGV3M6fWAQJgRACiyjR4L4h4174.png?imageMogr2%2Finterlace%2F1',
  },
  {
    path:
      'https://p3-q.mafengwo.net/s15/M00/D2/04/CoUBGV3OjfyAaynmACSSNhA7nZw036.png?imageMogr2%2Finterlace%2F1',
  },
  {
    path:
      'https://n4-q.mafengwo.net/s15/M00/AE/3B/CoUBGV3KcA-AJurwACLrgaJq2Ro980.png?imageMogr2%2Finterlace%2F1',
  },
  {
    path:
      'https://b4-q.mafengwo.net/s15/M00/91/08/CoUBGV3KY-OAM4DiACbGe19jLYc548.png?imageMogr2%2Finterlace%2F1',
  },
  {
    path:
      'https://b1-q.mafengwo.net/s15/M00/F4/E6/CoUBGV3JOZKAYRMpACtg9uJ5exA386.png?imageMogr2%2Finterlace%2F1',
  },
];
interface imgListObject {
  path: string;
}

const Index: React.FC = props => {
  const [imgList] = useState(imgLists);
  const [activeImg, setactiveImg] = useState(imgLists[2].path);

  const changeImg = (props: string) => {
    setactiveImg(props);
  };

  return (
    <Fragment>
      <div className={styles.imgNavigation}>
        <div className="img-big">
          <img src={activeImg} />
        </div>
        <ul className="img-smalls">
          {imgList.map((item: imgListObject) => (
            <li key={item.path} className="img-small" onClick={() => changeImg(item.path)}>
              {' '}
              <img src={item.path} />{' '}
            </li>
          ))}
        </ul>
        <div className="search">
          <Search placeholder="搜目的地/酒店/景点" enterButton style={{ width: '538px' , fontSize: '16px'}} />
        </div>
      </div>
    </Fragment>
  );
};

export default Index;
