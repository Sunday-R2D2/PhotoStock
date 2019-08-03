import React from "react";
import { connect } from "react-redux";

import classes from "./PhotosGrid.module.css";
import Item from "../Item/Item";

function PhotosGrid(props) {
  // console.log(props.data);

  let items = <h2>No photos</h2>;

  if (props.data) {
    items = props.data.map(item => {
      return (
        <Item
          key={item.id + (Math.random() * 99).toFixed(0)}
          title={item.title}
          callout={item.callout}
          date={item.date}
          id={item.id}
          img={item.img}
        />
      );
    });
  } else {
    items = <h2>No photos</h2>;
  }

  return <div className={classes.PhotosGrid}>{items}</div>;
}

const mapStateToProps = state => {
  return {
    data: state.data
  };
};

export default connect(
  mapStateToProps,
  null
)(PhotosGrid);
