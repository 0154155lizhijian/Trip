import React, { Component, useState } from 'react'

const Plane :React.FC = props => {
  const [page, setpage] = useState('机票');
  return(
   <div>
     <h1>{page}</h1>
   </div>
  )
} 

export default Plane;
