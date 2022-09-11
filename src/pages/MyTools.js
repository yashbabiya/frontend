import React from 'react'
import { useState } from 'react';

export default function MyTools() {

  const [activeTab,setActiveTab] = useState("RENTED");
  return (
    <div className='page mytools'>
      <h2>My Tools</h2>

      <div className="bottom">
        <div className="btns flex">
          <button className='green' style={activeTab==="RENTED" ? {} :{background:"none"}} onClick={()=>setActiveTab("RENTED")}>Rented</button>
          <button className='yellow' style={activeTab==="BORROWED" ? {} :{background:"none"}} onClick={()=>setActiveTab("BORROWED")}>Borrowed</button>

        </div>

        {
          activeTab === "RENTED" ?

            <>Rented</>
          :<>Borrowed</>
        }
      </div>
    </div>
  )
}
