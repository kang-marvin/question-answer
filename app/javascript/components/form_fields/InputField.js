import React from "react";

const className = `
  bg-gray-200 appearance-none
  border-2 border-gray-200 rounded
  w-full py-2 px-4 text-gray-700
  leading-tight focus:outline-none
  focus:bg-white focus:border-purple-500
`;

const InputField = (props) => {
  const { queryString, placeholder, handleInputChange } = props;

  return (
    <input
      type="text"
      className={className}
      value={queryString}
      placeholder={placeholder}
      onChange={handleInputChange}
    />
  );
};

export default InputField;
