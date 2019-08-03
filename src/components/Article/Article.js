import React from "react";
import { connect } from "react-redux";

import classes from "./Article.module.css";

function Article(props) {
  const art = props.articleID;
  // console.log(props.articleID);

  return (
    <div className={classes.Article}>
      <article>
        <img src={art.img} alt="" />
        <h2>{art.title}</h2>
        <p>{art.description}</p>
      </article>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    articleID: state.articleID
  };
};

export default connect(
  mapStateToProps,
  null
)(Article);
