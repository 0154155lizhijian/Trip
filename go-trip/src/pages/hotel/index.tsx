import React, { Component, useState } from 'react'

const Hotel :React.FC = props => {
  const [page, setpage] = useState('订酒店');
  return(
   <div>
     <h1>{page}</h1>
   </div>
  )
} 

export default Hotel;
