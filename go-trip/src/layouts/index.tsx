import React, { Fragment } from 'react';
import styles from './index.less';
import Header from './Header';
import Footer from './Footer';

const BasicLayout: React.FC = props => {
  return (
    <Fragment>
      <div className={styles.gbWrapper}>
        <Header />
        <div className='main'>
          {props.children}
        </div>
      </div>
      <Footer />
    </Fragment>
   
  );
};

export default BasicLayout;
