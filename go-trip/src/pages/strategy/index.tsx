import React, { Component, useState } from 'react'

const Srtategy :React.FC = props => {
  const [page, setpage] = useState('旅游攻略');
  return(
   <div>
     <h1>{page}</h1>
   </div>
  )
} 

export default Srtategy;
