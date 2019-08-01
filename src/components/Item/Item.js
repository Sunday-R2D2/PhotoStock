import React from "react";
import classes from "./Item.module.css";

function Item(props) {
  return (
    <div className={classes.Item} data-id={props.id}>
      <img src={props.img} alt="" />
      <div className={classes.desc}>
        <h2>{props.title}</h2>
        <div className={classes.dop_info}>
          <p>{props.callout}</p>
          <small>{props.date}</small>
        </div>
      </div>
    </div>
  );
}

export default Item;
