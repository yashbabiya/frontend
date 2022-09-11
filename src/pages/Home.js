import React from 'react'
import Hero from '../imgs/hero.png'
export default function Home() {
  return (
    <div className='page home'>
      <div className="top flex-col hero" style={{backgroundImage: `url(${Hero})`}}>
          <h1>
            Get The Goods that You need
          </h1>
          <button className='blue'>
            Explore Now
          </button>
      </div>
      <div className="bottom">


          <h2>Why Borrowing instead of purchasing ?</h2>
          <div className="why flex">
            <div className="card yellow">
              <i className="im im-coin"></i>

              <b>No initial costs</b>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores ratione officiis quo nobis assumenda! Corrupti sit blanditiis quas fugiat rerum.
              </p>
            </div>

            <div className="card yellow">
              <i className="im im-tools"></i>

              <b>No Maintenance costs</b>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores ratione officiis quo nobis assumenda! Corrupti sit blanditiis quas fugiat rerum.
              </p>
            </div>

            <div className="card yellow">
              <i className="im im-flask"></i>

              <b>For Trial purpose</b>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores ratione officiis quo nobis assumenda! Corrupti sit blanditiis quas fugiat rerum.
              </p>
            </div>


          </div>


          <h2>How it works ?</h2>
          <div className="how flex">


          <div className="card green">
              <i className="im im-magnifier"></i>

              <b>Find the product you need</b>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores ratione officiis quo nobis assumenda! Corrupti sit blanditiis quas fugiat rerum.
              </p>
            </div>

            <div className="card green">
              <i className="im im-speech-bubble"></i>

              <b>Chat with renter</b>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores ratione officiis quo nobis assumenda! Corrupti sit blanditiis quas fugiat rerum.
              </p>
            </div>

            <div className="card green">
              <i className="im im-cube"></i>

              <b>Use it for your need</b>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores ratione officiis quo nobis assumenda! Corrupti sit blanditiis quas fugiat rerum.
              </p>
            </div>

          </div>


      </div>

    </div>
  )
}
