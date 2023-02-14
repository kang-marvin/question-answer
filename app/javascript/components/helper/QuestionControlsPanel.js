
import React, { useState } from "react"

const NoSubmittedAnswerButton = () => {
  return (
    <button
      disabled
      className="
        flex-auto w-3/12 bg-red-100 text-red-500
        font-bold py-3 px-2 m-2 border rounded-full
      "
    >
      NO ANSWER SUBMITTED
    </button>
  )
}

const QuestionControlsPanel = props => {

  const {
    hasTimeElapsed,
    selectedAnswer,
    isLastQuestion,
    handleSubmitAnswer
  } = props

  const [hasSubmittedAnswer, setHasSubmittedAnswer] = useState(false)

  const handleSubmit = () => {
    handleSubmitAnswer(selectedAnswer)
    setHasSubmittedAnswer(true)
  }

  return (
    <div className="flex px-2 m-4">
      <span className="flex-auto w-8/12"></span>
      {
        hasTimeElapsed &&
        selectedAnswer === null &&
        <NoSubmittedAnswerButton />
      }

      {
        hasTimeElapsed === false &&
        hasSubmittedAnswer === false &&
        <button
          disabled={selectedAnswer === null}
          className="
            flex-auto w-1/12 bg-sky-700
          text-white font-bold py-3
            px-2 m-2 border rounded
            uppercase
          "
          onClick={handleSubmit}
        >Submit</button>
      }

      {
        hasTimeElapsed &&
        hasSubmittedAnswer &&
        isLastQuestion === false &&
        <button
          className="
            flex-auto w-2/12 bg-sky-700
          text-white font-bold py-3
            px-2 m-2 border rounded
            uppercase
          "
          onClick={null}
        >Next Question</button>
      }

      {
        hasTimeElapsed &&
        hasSubmittedAnswer &&
        isLastQuestion &&
        <button
          className="
            flex-auto w-2/12 bg-sky-700
          text-white font-bold py-3
            px-2 m-2 border rounded
            uppercase
          "
          onClick={null}
        >View Results</button>
      }

    </div>
  )
}

export default QuestionControlsPanel