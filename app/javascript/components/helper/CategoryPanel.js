import React from "react"

const CategoryPanel = props => {

  const {
    title,
    questionsCount
  } = props

  return (
    <div className="flex py-4 px-2 bg-gray-200">
      {/* Question Title */}
      <div className="flex-auto w-4/5">
        <p className="bold">{title}</p>
      </div>

      {/* Remaining Questions Count */}
      <div className="flex-auto w-1/5">
        <p className="float-right">
          {`${questionsCount} questions to go`}
        </p>
      </div>
    </div>
  )
}

export default CategoryPanel