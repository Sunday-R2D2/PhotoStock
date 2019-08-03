import React from "react";
import { connect } from "react-redux";

import classes from "./Article.module.css";

function Article(props) {
  // console.log(props.articleID);

  let article = <article>No Article</article>;

  if (props.articleID) {
    article = (
      <article>
        <img src={props.articleID.img} alt="" />
        <h2>{props.articleID.title}</h2>
        <p>{props.articleID.description}</p>
      </article>
    );
  } else {
    article = (
      <article>
        <h2>No Article</h2>
      </article>
    );
  }

  return <div className={classes.Article}>{article}</div>;
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
