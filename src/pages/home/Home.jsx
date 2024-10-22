import React from 'react'
import "./home.css"

function Home() {
  return (
    <>
    <div className="navbar">
      <div className="logo"></div>
      <div className="menu">
        <ul>
          <li>MENU</li>
          <li>LOCATION</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
      </div>
      <div className="login">
        <button>Login</button>
      </div>
    </div>


    <div className="hero">
      <div className="hero-text">
      <div className="hero-h1">
      <h1>YOUR FEET DESERVES THE BEST</h1>
      </div>
      <div className="hero-p">
      <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
      </div>

      <div className="hero-button">
        <button className='shop-now'>Shop Now</button>
        <button className='category'>Category</button>
      </div>
      <div className="avail">
        <p>Also Available On</p>
        <div className="shopping-site">
          <div className="flipkart"></div>
          <div className="amazon"></div>
        </div>
      </div>
      </div>

      <div className="hero-img"></div>
    </div>
    
    </>
  )
}

export default Home