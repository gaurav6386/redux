import React from 'react'
import '../Styles/Components/home.css';
import { Div } from '../Styles/mui/index';

const Home = () => {
  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div>Home</div>
        <Div>{"This div's text looks like that of a button."}</Div>
      </div>
    </div> 
  )
}

export default Home