import React from 'react'

export default function Queries() {
  return (
    <div className='queries page'>
      <h2>Queries</h2>
      <div className='wrapper'>
        
        <div className="left">
            <div className="form">
            <div className="title">
              <p>Name : </p>
              <input type="text" />
            </div>
        
            <div className="description">
              <p>Description : </p>
              <textarea type="text" rows={5}></textarea>
            </div>
        
            <button className='yellow'> Add Query</button>
        
        
            </div>
        </div>
        <div className="right">

          <div className='Qcard'>ok</div>
          <div className='Qcard'>ok</div>
          <div className='Qcard'>ok</div>
          <div className='Qcard'>ok</div>
          <div className='Qcard'>ok</div>
          <div className='Qcard'>ok</div>


        
        </div>
      </div>
    </div>
  )
}
