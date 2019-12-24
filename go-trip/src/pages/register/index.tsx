import React, { Component, useState } from 'react'

const Register: React.FC = props => {
  const [page, setpage] = useState('注册');
  return(
   <div>
     <h1>{page}</h1>
   </div>
  )
} 

export default Register;
