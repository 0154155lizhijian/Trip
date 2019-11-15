import React, { Fragment } from 'react';
import styles from './index.less';
import Header from './Header';

const BasicLayout: React.FC = props => {
  return (
    <div className={styles.gbWrapper}>
      <Header />
      {props.children}
    </div>
  );
};

export default BasicLayout;
