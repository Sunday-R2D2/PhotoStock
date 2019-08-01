import React from "react";
import classes from "./Homepage.module.css";
import PhotosGrid from "../PhotosGrid/PhotosGrid";

function Homepage(props) {
  return (
    <div className={classes.Homepage}>
      <header>
        <h1>Welcome to our photo gallery</h1>
      </header>
      <PhotosGrid />
    </div>
  );
}

export default Homepage;
