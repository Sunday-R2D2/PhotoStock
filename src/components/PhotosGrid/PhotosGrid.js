import React from "react";
import { connect } from "react-redux";

import classes from "./PhotosGrid.module.css";
import Item from "../Item/Item";

function PhotosGrid(props) {
  console.log(props.data);

  let items = <h2>No photos</h2>;

  if (props.data) {
    items = props.data.map(item => {
      return (
        <Item
          key={item.id}
          title={item.title}
          callout={item.callout}
          date={item.date}
          id={item.id}
          img={item.img}
        />
      );
    });
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
