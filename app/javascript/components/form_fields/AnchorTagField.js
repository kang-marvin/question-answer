import React from "react";

const className = `
  py-2
  px-4
  border-2
  border-gray-200
  text-gray-700
  leading-tight
  focus:bg-white
  enabled:focus:border-purple-500
  enabled:hover:border-purple-500

  disabled:opacity-75
`

const AnchorTagField = props => {
  const {
    label,
    active,
    value = null,
    handleClick
  } = props;

  return (
    <button
      disabled={value === null}
      className={`${active === true ? 'bg-green-200' : 'bg-gray-200'} ${className}`}
      onClick={handleClick}
    >
      {label}
    </button>
  )
}

export default AnchorTagField;
