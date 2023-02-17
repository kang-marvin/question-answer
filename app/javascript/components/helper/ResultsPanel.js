import React from "react"

const ResultsPanel = props => {

  const { results = [], totalQuestionsCount } = props

  const CorrectAnswersCountFromResult = (result) => {
    return result.filter(el => el.toUpperCase() === "TRUE").length
  }

  return (
    <div className={`
      overflow-hidden p-2
      aspect-square flex flex-col
      items-center justify-center
      text-black rounded-sm gap-1
      capitalize
    `}>
      <h4 className="text-4xl font-semibold">
        {`${CorrectAnswersCountFromResult(results)}/${totalQuestionsCount}`}
      </h4>
      <span className="font-small text-sm">
        correct answers
      </span>
    </div>
  )
}

export default ResultsPanel
