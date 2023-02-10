import React from "react";

const className = `
  shadow bg-purple-500
  hover:bg-purple-400
  focus:shadow-outline
  focus:outline-none text-white
  font-bold py-2 px-4 rounded
`

const SubmitField = props => {
  const {
    label,
    handleSubmit
  } = props;

  return (
    <button
      className={className}
      onClick={handleSubmit}
    >
      {label}
    </button>
  )
}

export default SubmitField;