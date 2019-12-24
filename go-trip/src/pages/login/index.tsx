import React, { Component, useState } from 'react'

const Login :React.FC = props => {
  const [page, setpage] = useState('登录');
  return(
   <div>
     <h1>{page}</h1>
   </div>
  )
} 

export default Login;
