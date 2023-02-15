import React from "react"

const RemainingQuestionsLabel = (count) => {
  if (count < 2) {
    return "few more questions to go"
  }
  return `${count} more questions to go`
}

const CategoryPanel = props => {
  const {
    title,
    remainingQuestionsCount
  } = props

  return (
    <div className="flex py-4 px-2 bg-gray-200">
      {/* Question Title */}
      <div className="flex-auto w-3/5">
        <p className="bold">{title}</p>
      </div>

      {/* Remaining Questions Count */}
      <div className="flex-auto w-2/5">
        <p className="float-right">
          {RemainingQuestionsLabel(remainingQuestionsCount)}
        </p>
      </div>
    </div>
  )
}

export default CategoryPanel