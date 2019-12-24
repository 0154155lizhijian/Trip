import React, { Component, useState } from 'react'

const Gotrip :React.FC = props => {
  const [page, setpage] = useState('去旅行');
  return(
   <div>
     <h1>{page}</h1>
   </div>
  )
} 

export default Gotrip;
