import React from "react";
import "./style.css";

const PageTitle = ({
  tag,
  heading,
  subHeading,
  tagClass = "",
  headingClass = "",
  subHeadingClass = "",
  wrapperClass = "",
}) => {
  return (
    <div className={`text-lg font-normal text-gray-500 ${wrapperClass}`}>
      {tag && (
        <h1
          className={`text-sm font-medium text-gray-600 flex  justify-center items-center tag-style ${tagClass}`}
        >
          {tag}
        </h1>
      )}
      {heading && (
        <p className={`capitalize heading-title-text ${headingClass}`}>
          {heading}
        </p>
      )}
      {subHeading && (
        <p className={`sub-heading-title ${subHeadingClass}`}>{subHeading}</p>
      )}
    </div>
  );
};

export default PageTitle;
