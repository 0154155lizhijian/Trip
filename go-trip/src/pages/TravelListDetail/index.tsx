import React, { Component, useState } from 'react'
import qs from 'qs';
import styles from './index.less';

const Srtategy :React.FC = props => {

  const {id} = qs.parse(props.location.search.substr(1));

  return(
   <div className={styles.travelListDetailWrap}>
     <div className="cover-box">
      <div className='cover-image' />
      <div className="cover-title-warp">
        <div className="cover-title">
          土豆不可思议————爱尔兰
        </div>
        <div>
          顶
        </div>
      </div>
     </div>
   </div>
  )
} 

export default Srtategy;
