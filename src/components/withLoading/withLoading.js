import React from 'react'

import { CircularProgress } from '@material-ui/core';
import './withLoading.scss'

const WithLoading = ({isLoading, Component, pathname }) => {
console.log(pathname)
console.log(isLoading)
return (

    <>
      {  
          isLoading ? 
          <div className="with-loading"> 
          <CircularProgress value="M" />
          </div> :
          <Component pathname={pathname} />
      }
    
    </>
)
}


export default WithLoading