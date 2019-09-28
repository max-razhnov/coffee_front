import React from "react";
import PropTypes from "prop-types";

const SectionInfo = (props) => (
  <div className="section__info">
    <span>{props.title}</span>
  </div>
);

SectionInfo.propTypes = {
  title: PropTypes.string,
};

export default SectionInfo;
