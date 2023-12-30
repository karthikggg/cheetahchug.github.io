import React from 'react'
import { Navbar } from './navbar'



export const Home = () => {
  return (
    <div className="main">
       <div><Navbar /></div>
      <div className='home'>
        <div className="hometext">
          <p>Energy drink</p>
          <h1 className='xe'>Xtreme emergency</h1>
          <p className='grab'>grab your first drink</p>
          <div className="button"><button>Add to cart</button></div>
        </div>
          <img src="./assets/home.jpg" alt="" />
      </div>
    </div>
  )
}
