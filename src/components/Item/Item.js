import React from "react";
import classes from "./Item.module.css";

function Item(props) {
  return (
    <div className={classes.Item} data-id={props.id}>
      <h2>{props.title}</h2>
      <div>{props.date}</div>
      <p>{props.callout}</p>
      <img src={props.img} alt="" />
    </div>
  );
}

export default Item;
