import React, { Component, useState } from 'react'

const Destination :React.FC = props => {
  const [page, setpage] = useState('目的地');
  return(
   <div>
     <h1>{page}</h1>
   </div>
  )
} 

export default Destination;

