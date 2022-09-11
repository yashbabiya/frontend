import React from "react";
import Select from "react-select";

export default function Explore() {


const options = [
  { value: 'MachanicalTools', label: 'Machanical Tools' },
  { value: 'Fashion', label: 'Fashion' },
  { value: 'Vehical', label: 'Vehical' },
  { value: 'Imiation', label: 'Imiation' },

]



  return (
    <div className="page explore">
      <div className="top flex-col">
        <h2>Explore</h2>

        <div className="search">
          <input type="text" />
          <button><i className="im im-magnifier"></i></button>
        </div>
        

        <Select className="select" options={options} isMulti/>
      </div>
    </div>
  );
}
