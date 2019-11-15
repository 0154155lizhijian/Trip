import React, { Fragment } from 'react';
import styles from './index.css';

const BasicLayout: React.FC = props => {
  return (
    <div className={styles.gbWrapper}>
      {props.children}
    </div>
  );
};

export default BasicLayout;
