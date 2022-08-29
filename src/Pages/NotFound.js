import React from 'react'
import '../Styles/Components/home.css';
import { Div } from '../Styles/mui/index';

const PageNotFound = () => {
  return (
    <div class="content-wrapper">
      <div className="content-header">
        <div><h1>404 Error!</h1></div>
        <Div>{"Sorry, This page doesn't exist"}</Div>
      </div>
    </div> 
  )
}

export default PageNotFound;