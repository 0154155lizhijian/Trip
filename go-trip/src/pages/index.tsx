import React, { Fragment, useState, useEffect } from 'react';
import styles from './index.less';
import { Button, Input, Tabs, Icon } from 'antd';
import request from '@/utils/request';


const { Search } = Input;
const { TabPane } = Tabs;

const Index: React.FC = props => {
  const [imgList, setImgList] = useState([{ path: '' }]);
  const [activeImg, setactiveImg] = useState('');
  const [tourismColumnList, setTourismColumnList] = useState([
    { title: '', content: '', imgPath: '' },
  ]);
  const [activeOlOne, setactiveOlOne] = useState(0);
  const [offsetLeftOne, setoffsetLeftOne] = useState(0);
  const [clientWidth, setclientWidth] = useState(0);

  const operations = (
    <Button type="primary" size="large">
      <Icon type="form"></Icon> 写游记
    </Button>
  );

  useEffect(() => {
    // console.log(request);
    const url = 'http://148.70.22.234:8886/point/list?page=1'
    request(url).then((res: any)=>{
      console.log(res);
    })
  }, [])

  interface imgListObject {
    path: string;
  }

  window.onresize = function(){
    listenForClientWidth()
  }
  function listenForClientWidth(){
    const clientWidths = document.documentElement.clientWidth;
    setclientWidth(clientWidths)
  }

  const imgLists: Array<imgListObject> = [
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

  useEffect(() => {
    setImgList(imgLists);
    setactiveImg(imgLists[2].path);
    setTourismColumnList(tourismColumnLists);
    listenForClientWidth();
  }, []);

  const changeImg = (props: string) => {
    setactiveImg(props);
  };

  interface K {
    title: string;
    content: string;
    imgPath: string;
    // age?: number;
  }

  const tourismColumnLists: Array<K> = [
    {
      title: '漫山岛1',
      content:
        '漫山岛在第二条路上，满眼都是天赋，却偏爱挥霍青山绿水，用自己的方式过小日子，即便强行拖它起来，也得不到结果。',
      imgPath: 'https://n1-q.mafengwo.net/s13/M00/FB/B9/wKgEaVycpr6Ae-TXAAC_Ffkpk0s50.jpeg',
    },
    {
      title: '漫山岛2',
      content:
        '漫山岛在第二条路上，满眼都是天赋，却偏爱挥霍青山绿水，用自己的方式过小日子，即便强行拖它起来，也得不到结果。',
      imgPath: 'https://n1-q.mafengwo.net/s13/M00/FB/B9/wKgEaVycpr6Ae-TXAAC_Ffkpk0s50.jpeg',
    },
    {
      title: '漫山岛3',
      content:
        '漫山岛在第二条路上，满眼都是天赋，却偏爱挥霍青山绿水，用自己的方式过小日子，即便强行拖它起来，也得不到结果。',
      imgPath: 'https://n1-q.mafengwo.net/s13/M00/FB/B9/wKgEaVycpr6Ae-TXAAC_Ffkpk0s50.jpeg',
    },
    {
      title: '漫山岛4',
      content:
        '漫山岛在第二条路上，满眼都是天赋，却偏爱挥霍青山绿水，用自己的方式过小日子，即便强行拖它起来，也得不到结果。',
      imgPath: 'https://n1-q.mafengwo.net/s13/M00/FB/B9/wKgEaVycpr6Ae-TXAAC_Ffkpk0s50.jpeg',
    },
    {
      title: '漫山岛5',
      content:
        '漫山岛在第二条路上，满眼都是天赋，却偏爱挥霍青山绿水，用自己的方式过小日子，即便强行拖它起来，也得不到结果。',
      imgPath: 'https://n1-q.mafengwo.net/s13/M00/FB/B9/wKgEaVycpr6Ae-TXAAC_Ffkpk0s50.jpeg',
    },
  ];

  const changeOl = (index: number) => {
    setactiveOlOne(index);
  };
  useEffect(() => {
    setoffsetLeftOne(-activeOlOne * 260);
  }, [activeOlOne]);

  interface tripList {
    id: number;
  }

  const recommandTripList: Array<tripList> = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ];

  const hotTripList: Array<tripList> = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ];

  const TripListNode  = (props: tripList): React.ReactNode =>{
    return (
      // props.map(() => (
      <div className="trip-list" key={props.id}>
        <div className="img">
          <img
            src="http://n1-q.mafengwo.net/s15/M00/A5/80/CoUBGV26oUiAN44KAAGTa7X2x9Q584.jpg?imageMogr2%2Fthumbnail%2F%21220x150r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21220x150%2Fquality%2F90"
            alt=""
          />
        </div>
        <div className="trip-list-content">
          <div className="title">
            挪威，无人不户外之三大奇石7天挑战（布道石不拥挤，奇迹石不排队，山妖之舌看日出日落）
          </div>
          <div className="content">
            序 Du må nyte for å yte 会有这样一个地方，即使前往的过程艰难你也一直想回去吗？ 如果有，
            那会是一个什么样的地方？ 对于我来说， 会是一个在高处的广阔旷野。
            在天与地之间，世界是在天与地之间，世界是
          </div>
          <div className="information"></div>
        </div>
      </div>
      // ))
    );
  }

  return (
    <Fragment>
      <div className={styles.imgNavigation}>
        <div className="top-container">
          <div className="img-big">
            <img src={activeImg} />
          </div>
          <ul className="img-smalls" style={{ display:(clientWidth<1120?'none':'block')}}>
            {imgList.map(item => (
              <li key={item.path} className={activeImg === item.path ? 'img-small active' : 'img-small'} onClick={() => changeImg(item.path)}>
                <img src={item.path} />
              </li>
            ))}
          </ul>
          <div className="search">
            <Search
              placeholder="搜目的地/酒店/景点"
              enterButton
              style={{ width: '538px', fontSize: '16px' }}
            />
          </div>
        </div>
        <div className="content-container">
          <div className="content-container-box">
          <div className="recommend-wrap">
            <a href="/" style={{ display: 'block', margin: '24px 0' }}>
              <img
                src="//images.mafengwo.net/images/safety-prevention/index-link.png"
                width="218"
                height="31"
              />
            </a>
            <div className="Tourism-column">
              <div className="column-title">
                <span className="title-name">旅行家专栏</span>
                <span className="more">专栏首页</span>
              </div>
              <div className="column-content">
                {/* <ul style={{left:`{${activeOlOne}}*260px`}}> */}
                <ul style={{ left: offsetLeftOne }}>
                  {tourismColumnList.map(item => (
                    <li key={item.title}>
                      <img src={item.imgPath} alt="" />
                      <div className="trip-introduce">
                        <div className="place">{item.title}</div>
                        <div className="content">{item.content}</div>
                      </div>
                    </li>
                  ))}
                </ul>
                <ol className="content-ol">
                  {tourismColumnList.map((item, index) => (
                    <li
                      key={item.title}
                      onClick={() => changeOl(index)}
                      className={activeOlOne === index ? 'active' : ''}
                    ></li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="Tourism-column" style={{ height: '230px' }}>
              <div className="column-title">
                <span className="title-name">旅游攻略推荐</span>
                <span className="more">更多</span>
              </div>
              <div className="column-content" style={{ height: '185px' }}>
                <img
                  src="https://n3-q.mafengwo.net/s12/M00/99/77/wKgED1xBjG6AOludAAL0f6tN5uk92.jpeg?imageMogr2%2Fthumbnail%2F%21260x139r%2Fgravity%2FCenter%2Fcrop%2F%21260x139%2Fquality%2F100"
                  alt=""
                />
                <div className="slogan">日本交通=头疼？NO！史上超简单日本交通攻略~</div>
              </div>
            </div>
            <div className="Tourism-column" style={{ height: '230px' }}>
              <div className="column-title">
                <span className="title-name">未知旅行实验室</span>
                <span className="more">查看更多></span>
              </div>
              <div className="column-content" style={{ height: '185px' }}>
                <img
                  src="http://images.mafengwo.net/images/new-index/unknownTravel181120.png"
                  alt="未知旅行实验室"
                />
              </div>
            </div>
          </div>
          <div className="trip-warp">
            <div className="ads">
              <img
                src="https://b4-q.mafengwo.net/s15/M00/F0/13/CoUBGV3KllOAQDnFAADFh7_f1k8050.jpg"
                alt=""
              />
            </div>

            <Tabs tabBarExtraContent={operations} size="large">
              <TabPane tab="热门游记" key="1">
                <div className="trip-lists">
                    {
                      recommandTripList.map((item: tripList)=>(
                        TripListNode(item)
                      ))
                    }
                </div>
              </TabPane>
              <TabPane tab="最新发表" key="2">
                <div className="trip-lists">
                  {hotTripList.map((item: tripList)=>(
                      TripListNode(item)
                  ))}
                </div>
              </TabPane>
            </Tabs>
          </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Index;
