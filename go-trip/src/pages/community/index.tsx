import React, { Component, useState } from 'react'

const Community :React.FC = props => {
  const [page, setpage] = useState('社区');
  return(
   <div>
     <h1>{page}</h1>
   </div>
  )
} 

export default Community;

