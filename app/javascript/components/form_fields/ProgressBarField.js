import React from "react";

const ProgressBarField = (props) => {
  const { currentValue, maximumValue } = props;

  return (
    <progress
      className="w-full bg-teal-300 h-2 mb-4 shadow-inner"
      value={currentValue}
      max={maximumValue}
    ></progress>
  );
};

export default ProgressBarField;
