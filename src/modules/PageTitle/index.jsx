import React from "react";
import PropTypes from "prop-types";

const PageTitle = props => {
  return (
    <div className="main">
      <h1 className="main__header">{props.title}</h1>
      <p className="main__description">{props.subTitle}</p>
    </div>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string
};

PageTitle.defaultProps = {
  title: "",
  subTitle: ""
};

export default PageTitle;
