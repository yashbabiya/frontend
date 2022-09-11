import React from "react";
import { Link } from 'react-router-dom';

export default function ProductCard(props) {
  if (props) return <Link to={`/product/${props._id}`} className="prodCard blue">

    <img src={props.image} alt="" />

    <h3>{props.title}</h3>
    <p>{props.rent}{"₹ "}{props.timeperiod}</p>
    <p>{props.category}</p>

    <p>{props.location}</p>
    <p>{props.rating}</p>

  </Link>;

  return <></>;
}
